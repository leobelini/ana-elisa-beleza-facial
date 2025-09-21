import type { GatsbyNode } from "gatsby"
import path from "path"

// Função para criar o slug baseado no título
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, '') // Remove hífens do início e fim
}

// Criar campo slug para cada serviço
export const onCreateNode: GatsbyNode["onCreateNode"] = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'ServicesJson') {
    // Criar slug baseado no título
    const slug = createSlug(node.title as string)
    
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Query para buscar todos os serviços incluindo o slug
  const result = await graphql(`
    query CreatePagesQuery {
      allServicesJson {
        nodes {
          id
          title
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading services data", result.errors)
    return
  }

  const services = (result.data as any).allServicesJson.nodes

  // Template da página de serviço
  const serviceTemplate = path.resolve("./src/templates/service.tsx")

  // Criar uma página para cada serviço
  services.forEach((service: any) => {
    const slug = service.fields.slug
    
    createPage({
      path: `/servicos/${slug}`,
      component: serviceTemplate,
      context: {
        id: service.id, // ID interno do Gatsby para a query
        slug: slug,
      },
    })
  })

  reporter.info(`Created ${services.length} service pages`)
}
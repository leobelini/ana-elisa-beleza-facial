# Componentes Ana Elisa Beleza Facial

Este projeto foi refatorado para usar uma arquitetura de componentes reutilizáveis, facilitando a manutenção e permitindo reutilização em outros projetos.

## 📁 Estrutura de Componentes

```
src/
├── components/
│   ├── index.ts           # Exportações centralizadas
│   ├── Navbar.tsx         # Menu de navegação fixo
│   ├── Hero.tsx           # Banner principal
│   ├── About.tsx          # Seção sobre a profissional
│   ├── Services.tsx       # Grid de serviços
│   ├── Testimonials.tsx   # Carrossel de depoimentos
│   ├── Contact.tsx        # Seção de contato/agendamento
│   └── Footer.tsx         # Rodapé com links e informações
├── styles/
│   ├── GlobalStyle.ts     # Estilos globais
│   └── theme.ts           # Paleta de cores e estilos comuns
└── pages/
    └── index.tsx          # Página principal componentizada
```

## 🎨 Tema e Estilos

### Paleta de Cores
- **Dourado Principal:** `#C8A968`
- **Dourado Escuro:** `#A17C3C`
- **Branco Gelo:** `#FAF8F6`
- **Cinza Secundário:** `#8C8C8C`
- **Preto Principal:** `#1E1E1E`

### Estilos Comuns
O arquivo `theme.ts` contém estilos reutilizáveis para:
- Seções (`commonStyles.section`)
- Botões (`commonStyles.button`)
- Títulos de seção (`commonStyles.sectionTitle`)

## 📦 Componentes

### Navbar
Menu de navegação fixo com responsividade completa.

**Props:**
- `className?: string` - Classes CSS adicionais

**Funcionalidades:**
- Menu responsivo (desktop/mobile)
- Efeito de scroll com mudança visual
- Navegação suave entre seções
- Menu hambúrguer em mobile

### Hero
Banner principal da página.

**Props:**
- `title?: string` - Título principal (default: "Ana Elisa Beleza Facial")
- `tagline?: string` - Subtítulo (default: "Beleza e cuidado que realçam sua essência")
- `ctaText?: string` - Texto do botão (default: "Agende seu horário")
- `ctaLink?: string` - Link do botão (default: "#agendamento")
- `id?: string` - ID da seção (default: "home")

### About
Seção sobre a profissional.

**Props:**
- `title?: string` - Título da seção (default: "Sobre")
- `name?: string` - Nome da profissional
- `description?: string[]` - Array de parágrafos descritivos
- `profileIcon?: string` - Emoji/ícone do perfil (default: "👩‍⚕️")
- `id?: string` - ID da seção (default: "sobre")

### Services
Grid de serviços oferecidos.

**Props:**
- `title?: string` - Título da seção (default: "Serviços")
- `services?: Service[]` - Array de serviços
- `id?: string` - ID da seção (default: "servicos")
- `onServiceClick?: (service: Service) => void` - Callback para clique em serviço

**Interface Service:**
```typescript
interface Service {
  title: string
  description: string
  icon: string
}
```

### Testimonials
Carrossel de depoimentos de clientes.

**Props:**
- `title?: string` - Título da seção (default: "Depoimentos")
- `testimonials?: Testimonial[]` - Array de depoimentos
- `id?: string` - ID da seção (default: "depoimentos")
- `autoPlay?: boolean` - Auto-rotação (default: true)
- `autoPlayInterval?: number` - Intervalo em ms (default: 5000)

**Interface Testimonial:**
```typescript
interface Testimonial {
  text: string
  author: string
  rating?: number
}
```

### Contact
Seção de contato e agendamento.

**Props:**
- `title?: string` - Título da seção
- `description?: string` - Descrição
- `whatsappNumber?: string` - Número do WhatsApp
- `whatsappMessage?: string` - Mensagem padrão
- `email?: string` - E-mail de contato
- `contactInfo?: ContactInfo[]` - Informações adicionais
- `id?: string` - ID da seção (default: "agendamento")

### Footer
Rodapé com links e informações.

**Props:**
- `sections?: FooterSection[]` - Seções do footer
- `socialLinks?: SocialLink[]` - Links de redes sociais
- `copyright?: string` - Texto de copyright

## 🔄 Reutilização

### Importação Simples
```typescript
import { Navbar, Hero, Services } from '../components'
```

### Customização
Todos os componentes são altamente customizáveis via props:

```typescript
// Exemplo de uso customizado
<Services
  title="Nossos Tratamentos"
  services={customServices}
  onServiceClick={(service) => {
    // Lógica personalizada
    console.log('Serviço selecionado:', service.title)
  }}
/>
```

### Temas Personalizados
Para usar em outros projetos, basta modificar o arquivo `theme.ts`:

```typescript
export const colors = {
  primary: "#YOUR_PRIMARY_COLOR",
  secondary: "#YOUR_SECONDARY_COLOR",
  // ... outras cores
}
```

## 🚀 Benefícios da Componentização

1. **Reutilização:** Componentes podem ser usados em outras páginas/projetos
2. **Manutenção:** Mudanças em um componente refletem em toda aplicação
3. **Testabilidade:** Cada componente pode ser testado isoladamente
4. **Legibilidade:** Código mais limpo e organizado
5. **Escalabilidade:** Fácil adicionar novos recursos e funcionalidades

## 📝 Próximos Passos

- Adicionar testes unitários para cada componente
- Implementar Storybook para documentação visual
- Criar variações dos componentes (dark mode, temas alternativos)
- Adicionar animações mais complexas
- Implementar lazy loading para otimização
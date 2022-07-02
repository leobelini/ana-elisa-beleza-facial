import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import IconWhatsapp from '../images/svg/whatsapp.svg'
import IconInstagram from '../images/svg/instagram.svg'
import IconLocation from '../images/svg/location.svg'
import IconContact from '../images/svg/contact-book.svg'
import { SocialButton } from '../components/socialButton'
import { DialogRoute } from '../pageComponent/index'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { name: { eq: "vcard" } }) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
    }
  `)

  const [showDialogMaps, setShowDialogMaps] = React.useState(false)

  const toggleDialogMap = React.useCallback(() => {
    setShowDialogMaps(!showDialogMaps)
  }, [showDialogMaps])

  return (
    <>
      <Helmet>
        <title>Ana Elisa Cardoso - Beleza Facial</title>
        <meta name="theme-color" content="#F9F2F2" />
        <meta
          name="description"
          content="Ana Elisa Cardoso uma profissional dedicada e especializada em beleza facial com diversos procedimentos não invasivo para melhorar o seu bem estar."
        />
        <meta name="robots" content="index, follow" />
        <meta name="msapplication-navbutton-color" content="#F9F2F2" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F9F2F2" />
      </Helmet>
      <div className="sm:container sm:mx-auto flex-1 flex-col p-6">
        <div className="flex justify-center">
          <StaticImage
            className="w-40"
            src="../images/logo01.png"
            alt="Logo Ana Elisa Cardoso Beleza Facial"
            placeholder="blurred"
          />
        </div>
        <div className="m-3">
          <h1 className="text-2xl font-bold text-center font-sans text-zinc-900">Ana Elisa Cardoso</h1>
          <h2 className="text-lg text-center font-sans text-zinc-900">Ajudando a elevar sua autoestima</h2>
        </div>

        <div className="mt-10 flex-1 flex-col items-center justify-items-center	flex">
          <SocialButton href="https://wa.link/0zeoak" className="text-zinc-200 hover:bg-emerald-600 bg-emerald-700">
            <IconWhatsapp className="fill-white w-7 h-7 float-left mr-5" />
            Whatsapp
          </SocialButton>
          <SocialButton href="https://encurtador.com.br/owHV4" className="text-zinc-200 hover:bg-rose-600 bg-rose-700">
            <IconInstagram className="fill-white w-7 h-7 float-left mr-5" />
            Instagram
          </SocialButton>
          <SocialButton
            href="#"
            onClick={(e) => {
              e.preventDefault()
              toggleDialogMap()
            }}
            className="text-zinc-200 hover:bg-blue-600 bg-blue-700"
          >
            <IconLocation className="fill-white w-7 h-7 float-left mr-5" />
            Como chegar
          </SocialButton>
          <SocialButton
            href={data.allFile.edges[0].node.publicURL}
            className="text-zinc-200 hover:bg-sky-600 bg-sky-700"
          >
            <IconContact className="fill-white w-7 h-7 float-left mr-5" />
            Contato
          </SocialButton>
        </div>
      </div>

      <DialogRoute setShowDialog={setShowDialogMaps} showDialog={showDialogMaps} />
    </>
  )
}

export default IndexPage

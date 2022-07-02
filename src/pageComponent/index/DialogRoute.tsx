import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Dialog } from '../../components/dialog'

interface Props {
  showDialog: boolean
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const DialogRoute = ({ setShowDialog, showDialog }: Props) => {
  return (
    <Dialog setShowDialog={setShowDialog} showDialog={showDialog}>
      <h2 className="text-xl font-bold font-sans text-zinc-900">Selecione o aplicativo</h2>
      <div className="grid grid-cols-2 gap-4 pt-2">
        <div className="flex flex-1 flex-row content-center items-center justify-center">
          <a
            href="https://goo.gl/maps/pELEW7zbYU5Gv2838"
            target="_blank"
            type="button"
            rel="noopener noreferrer"
            className="bg-sky-700 p-4 text-lg text-zinc-200 rounded-3xl my-3 text-center w-full md:w-36"
          >
            <div className="flex justify-center mb-2">
              <StaticImage
                className="w-10"
                src="../../images/google-maps.png"
                alt="Logo Google Maps"
                placeholder="blurred"
              />
            </div>
            Google Maps
          </a>
        </div>
        <div className="flex flex-1 flex-row content-center items-center justify-center">
          <a
            href="https://encurtador.com.br/lvVY0"
            target="_blank"
            type="button"
            rel="noopener noreferrer"
            className="bg-sky-700 p-4 text-lg text-zinc-200 rounded-3xl my-3 text-center w-full md:w-36"
          >
            <div className="flex justify-center mb-2">
              <StaticImage className="w-10" src="../../images/waze.png" alt="Logo Waze" placeholder="blurred" />
            </div>
            Waze
          </a>
        </div>
      </div>
    </Dialog>
  )
}

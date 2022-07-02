import * as React from 'react'

interface Props {
  children: React.ReactNode
  showDialog: boolean
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const Dialog = ({ children, setShowDialog, showDialog }: Props) => {
  const refDialog = React.useRef(null)

  const toggleDialog = React.useCallback(() => {
    setShowDialog(!showDialog)
  }, [showDialog])

  const styleDialog = React.useMemo(() => {
    return showDialog ? `flex` : `hidden`
  }, [showDialog])

  return (
    <div className={`${styleDialog} fixed inset-0 content-center items-center  overflow-y-auto h-full w-full z-10`}>
      <div
        ref={refDialog}
        className="bg-rose-100 h-fit w-full md:w-1/2 px-4 pt-3 pb-5 mx-4 md:mx-auto my-auto rounded-3xl shadow-lg z-20"
      >
        {children}
      </div>
      <div
        className={`${styleDialog} fixed inset-0 content-center items-center bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full z-10`}
        onClick={(e) => {
          e.preventDefault()
          toggleDialog()
        }}
      ></div>
    </div>
  )
}

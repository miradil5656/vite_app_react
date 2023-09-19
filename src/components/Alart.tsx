import {ReactNode} from 'react'

interface Props {
    children: ReactNode
    open: boolean
   
}
const Alart = ({children,open}:Props) => {
  return (
    <div className={open ? "flex justify-between p-8 items-center text-3xl bg-red-500 w-[40%] m-auto rounded-xl mt-4 text-center":"hidden"}>
        {children}
        
    </div>
  )
}

export default Alart
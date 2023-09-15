import {ReactNode} from 'react'
interface Props {
    children: ReactNode
}
const Alart = ({children}:Props) => {
  return (
    <div className="p-4 text-3xl bg-red-500 w-[40%] m-auto rounded-xl mt-4 text-center">
        {children}
    </div>
  )
}

export default Alart
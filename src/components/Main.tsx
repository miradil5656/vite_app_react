import { useState } from "react"
interface Props {
    manu: string[]
    title: string
}

const Main = ({manu,title}:Props) => {

const [selectedItem, setSelectedItem] = useState(-1)

const style = "w bg-green-500 text-center p-4 rounded-lg text-white text-2xl "
const style1 = "bg-red-500 text-center p-4 rounded-lg text-xl"
// const handleClcik =(clickitem:MouseEvent)=>{
//     console.log(`${clickitem} cliked`)
// }
  return (
    <div>
         <h1>{title}</h1>
        <ul className="flex gap-8  flex-col bg-slate-400 justify-center  p-4 md:flex-row">
           
            {manu.map((item,index) => (
                //fix the key error

                <li onClick={()=>setSelectedItem(index)} key={item} className={selectedItem === index ? style :style1 }>{item}</li>
            ))} 
        </ul>
    </div>
  )
}

export default Main
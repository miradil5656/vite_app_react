import { useState } from "react"

const Main = () => {

const [selectedItem, setSelectedItem] = useState(-1)
const items = ["Home", "Menu", "Acsess", "Contact Us"]
const style = "bg-green-500 text-center p-4 rounded-lg text-white text-2xl"
const style1 = "bg-red-500 text-center p-4 rounded-lg text-xl"
// const handleClcik =(clickitem:MouseEvent)=>{
//     console.log(`${clickitem} cliked`)
// }
  return (
    <div>
        <ul className="flex gap-8  flex-col  p-4">
            {items.map((item,index) => (
                //fix the key error

                <li onClick={()=>setSelectedItem(index)} key={item} className={selectedItem === index ? style :style1 }>{item}</li>
            ))} 
        </ul>
    </div>
  )
}

export default Main
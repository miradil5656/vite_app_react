import { useState } from "react"
interface Props {
    manu: string[]
    title: string
    OnSelectItem : (item:string) => void
    setSelectedItemname : (item:string) => void
}


const Selected = ({manu,title,OnSelectItem,setSelectedItemname}:Props) => {

    const [selectedItem, setSelectedItem] = useState(-1)
    
    const style = "w bg-green-500 text-center p-4 rounded-lg text-white text-xl "
    const style1 = "bg-red-500 text-center p-4 rounded-lg text-xl"
    
      return (
        <div>
             <h1>{title}</h1>
            <ul className="flex gap-8  flex-col justify-center  p-4 md:flex-row">
               
                {manu.map((item,index) => (
                    //fix the key error
    
                    <li onClick={()=>{
                        setSelectedItem(index)
                        OnSelectItem(item)
                        setSelectedItemname(item)}
                    } key={item} className={selectedItem === index ? style :style1 }>{item}</li>
                ))} 
            </ul>
        </div>
      )
    }

export default Selected
import Alart from "./components/Alart"
import Button from "./components/Button"
import Main from "./components/Main"
import Selected from "./components/Selected"
import { useState } from "react"


const App = () => {

  const items = ["Home", "Menu", "Acsess", "Contact Us"]
  const [open, setOpen] = useState(false)
  const [SelectedItemname, setSelectedItemname] = useState("")

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
    <nav className="bg-black text-red-500 flex p-4 justify-between">
      <h1 className="font-bold">Logo</h1>
    </nav>
    <Main manu = {items} title="Menu"/>
    <Selected manu = {items} title="Menu" OnSelectItem={handleSelectItem} setSelectedItemname={setSelectedItemname}/>
    <h1 className="text-2xl font-bold text-center">selected Item</h1>
    <p className="p-4 text-3xl bg-red-300 w-[40%] m-auto rounded-xl mt-4 text-center">
      {SelectedItemname === "" ? "No Item Selected" : SelectedItemname}
      </p>
      <Alart open={open} >
      
      <p>miradil</p>
      <Button color="green" onClick={()=>setOpen(false)}>close</Button>
      </Alart>
      <Button  onClick={handleClick} >My Button</Button>
    </>
  )
}

export default App
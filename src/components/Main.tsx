const Main = () => {
//create list of items
//create a component for each item

const items = ["Home", "Menu", "Acsess", "Contact Us"]

const handleClcik:React.MouseEventHandler<HTMLLIElement> =(clickitem)=>{
    console.log(`${clickitem} cliked`)
}
  return (
    <div>
        <ul className="flex gap-4  flex-col  p-4">
            {items.map((item) => (
                //fix the key error

                <li onClick={handleClcik} key={item} className="bg-red-500 text-center hover:bg-slate-500 hover:text-white">{item}</li>
            ))} 
        </ul>
    </div>
  )
}

export default Main
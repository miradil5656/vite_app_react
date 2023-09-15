import Main from "./components/Main"


const App = () => {
  return (
    <>
    <nav className="bg-black text-red-500 flex p-4 justify-between">
      <h1 className="font-bold">Logo</h1>
      <ul className="flex gap-4 ">
        <li className="hover:cursor-pointer font-bold">Home</li>
        <li className="hover:cursor-pointer ">Menu</li>
        <li className="hover:cursor-pointer ">Acsess</li>
        <li className="hover:cursor-pointer ">Contact Us</li>
        
      </ul>
    </nav>
    <Main/>
    <footer></footer>
    </>
  )
}

export default App
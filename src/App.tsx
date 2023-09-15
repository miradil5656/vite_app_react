import Main from "./components/Main"


const App = () => {

  const items = ["Home", "Menu", "Acsess", "Contact Us"]
  return (
    <>
    <nav className="bg-black text-red-500 flex p-4 justify-between">
      <h1 className="font-bold">Logo</h1>
    </nav>
    <Main manu = {items} title="Menu"/>
    <footer></footer>
    </>
  )
}

export default App
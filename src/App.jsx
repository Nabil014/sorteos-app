import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"

function App () {

  return (
    <>
      < header >
        <NavBar />
      </ header>
      <main className="bg-slate-600 min-h-[100vh]">
        <Home />
      </main>
    </>
  )
}

export default App

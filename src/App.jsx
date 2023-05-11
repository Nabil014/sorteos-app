import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import NavBar from "./components/NavBar/NavBar"

function App () {

  return (
    <>
      < header >
        <NavBar />
      </ header>
      <main className="bg-slate-600 min-h-[calc(100vh-88px)]">
        <Home />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  )
}

export default App

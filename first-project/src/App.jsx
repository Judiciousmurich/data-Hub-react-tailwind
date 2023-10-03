import Newsletter from "./components/Newsletter"
import Analytics from "./components/Analytics"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Cards/>
        <Footer/>
      
      </div>

    </>
  )
}

export default App

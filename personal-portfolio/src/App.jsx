import { About, Hero, Navbar, Services, Work, Contact, Footer } from "./components"

const App = () => {
  return (
    <div>
      {/* components */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
import { About, Hero, Navbar, Services, Work, Contact } from "./components"

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
    </div>
  )
}

export default App
import { About, Hero, Navbar, Services, Work } from "./components"

const App = () => {
  return (
    <div>
      {/* components */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
    </div>
  )
}

export default App
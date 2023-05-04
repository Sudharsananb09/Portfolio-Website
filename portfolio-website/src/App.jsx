import '../src/scss/App.scss'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Qualifications from './Pages/Qualifications'

function App() {
  return (
    <div className='bg-dark'>
      <Navbar />
      <About />
      <Skills />
      <Qualifications />       
    </div>
  )
}

export default App

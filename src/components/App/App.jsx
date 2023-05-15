import { Routes, Route } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import PageNotFound from '../PageNotFound/PageNotFound'
import './app.scss'

function App() {

  return (
    <div id='body'>
      <div id="content-wrap">
        <Navbar />
      
        <Routes>
          <Route 
            path="/"
            element={<Homepage />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
          <Route 
            path="/projects"
            element={<Projects />}
          />
          <Route 
            path="/resume"
            element={<Resume />}
          />
          <Route 
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
      <Footer />  
    </div>
  )
}

export default App

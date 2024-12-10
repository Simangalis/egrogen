

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//Components
import Header from '../components/Header'
import Footer from '../components/Footer'

//Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Careers from '../pages/Careers'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Drone from '../pages/Drone'
import Electrical from '../pages/Electrical'
import Procurement from '../pages/Procurement'
import Renewable from '../pages/Renewable'
import SoftwareDev from '../pages/SoftwareDev'
import Services from '../pages/Services'
import Controls_and_Instrumentation from '../pages/Controls_and_Instrumentation'
import Pump_Station_Services from '../pages/Pump_Station_Services'
import Drone_Services from '../pages/Drone_Services'
import Software_Development from '../pages/Software_Development'
import Project_Management from '../pages/Project_Management'
import Terms_and_Conditions from '../pages/Terms_and_Conditions'
import ScrollToTop from '../components/ScrollToTop'


export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <ScrollToTop/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/drone' element={<Drone/>}/>
        <Route path='/electrical' element={<Electrical/>}/>
        <Route path='/procurement' element={<Procurement/>}/>
        <Route path='/renewable' element={<Renewable/>}/>
        <Route path='/softwareDev' element={<SoftwareDev/>}/> 
        <Route path='/Controls_and_Instrumentation' element={<Controls_and_Instrumentation/>}/> 
        <Route path='/Pump_Station_Services' element={<Pump_Station_Services/>}/>
        <Route path='/Drone_Services' element={<Drone_Services/>}/> 
        <Route path='/Software_Development' element={<Software_Development/>}/> 
        <Route path='/Project_Management' element={<Project_Management/>}/> 
       
        <Route path='/terms_and_conditions' element={<Terms_and_Conditions/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

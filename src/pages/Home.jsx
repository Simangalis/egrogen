
import Slider from '../components/slider/Slider'
import Achievement from '../components/achievement/Achievement'
import About from '../components/about/About'
import Contact from '../components/contacts/Contact'
import ServiceSection from '../components/serviceSection/ServiceSection'


export default function Home() {
  return (
    <>
    <div className='home'>
    <Slider/>
    </div>
    <Achievement/>
    <About/>
    <ServiceSection/>
    <Contact/>
    </>
  )
}

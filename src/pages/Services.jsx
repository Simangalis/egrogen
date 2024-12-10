
import ServicesPage from '../components/servicesPage/servicesPage'
import ServicesCards from '../components/servicesCards/ServicesCards'
import ServiceCardRene from '../components/serviceCardRene/ServiceCardRene'
import ServicesControlsAndInstrumentation from '../components/ControlsandInstrumentation/ServicesControlsAndInstrumentation'
import PumpStationServices from '../components/PumpStationServices/PumpStationServices'
import Procurements from '../components/procurements/Procurements'
import Softwaredevelopment from '../components/softwareDevelopment/Softwaredevelopment'
import DroneServices from '../components/droneServices/DroneServices.JSX'
import ProjectManagement from '../components/ProjectManagement/ProjectManagement'
import FooterBanner from '../components/footerBanner/FooterBanner'


export default function Services() {
  return (
 <>
 <ServicesPage/>
 <ServicesCards/>
 <FooterBanner/>
 <ServiceCardRene/>
 <FooterBanner/>
 <ServicesControlsAndInstrumentation/>
 <FooterBanner/>
 <PumpStationServices/>
 <FooterBanner/>
 <Softwaredevelopment/>
 <FooterBanner/>
 <DroneServices/>
 <FooterBanner/>
 <Procurements/>
 <FooterBanner/>
 <ProjectManagement/>
 <FooterBanner/>
 </>
  )
}

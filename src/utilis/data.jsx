import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLinkedin, CiFacebook, CiInstagram,} from "react-icons/ci";
import { TbX } from "react-icons/tb";
  
  
  
export const sliderData = [
    {
      image:"/electricalimge-2.jpg",
      heading: "Electrical Services",
      desc: "We are providing top-quality workmanship and exceptional customer service for all your electrical needs. We handle projects of all sizes, from small repairs to large-scale installations.",
      link: "/electrical" 
    },
    {
      image:"/pump1.jpg",
      heading: "Pump Station Services",
      desc: "We understand the role your pump station plays and are committed to ensuring its optimal performance. We offer comprehensive solutions, from maintenance and repairs to new installations and upgrades",
      link: "/Pump_Station_Services" 
    },
    {
      image:"/solaar1.jpg",
      heading: "Renewable Energy",
      desc: " We're passionate about building a sustainable future through renewable energy. We offer a range of services to help you harness the power of the sun, wind, and other natural resources.",
      link: "/renewable" 
    },
    {
      image:"/control-3.png",
      heading: "Controls and Instrumentation Services",
      desc: "We specialize in delivering reliable solutions for all your pump control and instrumentation needs.",
      link: "/Software_Development" 
    },
    {
      image:"/software.jpg",
      heading: "Software Development",
      desc: "We build custom software tailored to your specific needs. Our team of expert developers is ready to bring your vision to life, we offer mobile app, web application, or enterprise-level software development.",
      link: "/Software_Development" 
    },
    {
      image:"/drone-4.jpg",
      heading: "Drone Services",
      desc: "We offer drone Services from aerial surveys to inspections and stunning photography, we deliver efficient, high-quality solutions tailored to your needs",
      link: "/Software_Development" 
    },
  ];

  export const contacts = [
  {
    name:"Email",
    value:"info@egrogen.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"(+268) 7647 4581 / 7686 7580",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Kingdom of Eswatini, Siphofaneni",
    icon:<IoLocationOutline/>,
  },
];

export const importantFooter = [
  {
    name: "Quick Links",
    routes: [
      { name: "Home", id: "/" },
      { name: "About Us", id: "/about" },
      { name: "Services", id: "/services" },
      { name: "Projects", id: "/projects" },
      { name: "Careers", id: "/careers" },
      { name: "Contact Us", id: "/contact" },
    ],
  },
  {
    name: "Customer Service",
    routes: [{ name: "info@egrogen.com" }, { name: "sales@egrogen.com" }],
  },

  {
    name: "Policy",
    routes: [{ name: "Terms and Conditions", id: "/terms_and_conditions" }],
  },
  {
    name: "Connect with us",
    routes: [
      { name: "Facebook", icon: <CiFacebook />, url: "http://facebook.com" },
      { name: "LinkedIn", icon: <CiLinkedin />, url: "http://linkedin.com" },
      { name: "Instagram", icon: <CiInstagram />, url: "http://instagram.com" },
      { name: "X", icon: <TbX />, url: "http://twitter.com" },
    ],
  },
];



  


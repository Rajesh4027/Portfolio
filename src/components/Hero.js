import Header from './Header';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';


import HeroImg from '../assets/hero.svg'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

  const config = {
    name:"I'm Vetri ",
    subtile : "'I'm a Full-Stack Developer and Designer'",
    social:{
      twitter:'https://x.com/arrahman',
      facebook:'https://www.facebook.com/arrahman/',
      linkedin:'https://in.linkedin.com/in/ar-rahman-67264b26?trk=people-guest_people_search-card'
    }
  }

  return <div>
    <div><Header /></div>
    <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center' >
    <div className='md:w-1/2 flex flex-col'>
    <h1 className=' text-white text-4xl'>Hi,<br/>{config.name}
    <p className='text-2xl'>{config.subtile}</p></h1>
    <div className='flex py-10 '>
        <a target='_blank' href={config.social.twitter} className='pr-4 hover:text-white'><AiOutlineTwitter size={40}  /></a>
        <a target='_blank' href={config.social.facebook} className='pr-4 hover:text-white'><AiOutlineFacebook size={40}  /></a>
        <a target='_blank' href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}  /></a>
    </div>
    </div>
    <img className='md:w-1/3 ' src={HeroImg} />
 
    
  </section>
    <About />
    <Projects />
    <Resume />
    <Contact />
    <Footer />
  </div>
  
  

  
}

import AboutImg from '../assets/about.svg'

export default function About() {
  return <section className='flex flex-col sm:flex-row  bg-violet-500 ' id='about'>
    <div className='flex md:w-1/2 px-2 py-5 '>
        <img src={AboutImg}  />
    </div>
    <div className='md:w-1/2 flex justify-center px-4 py-3'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[180px] border-b-violet-900 font-bold'>About Me</h1>
        <p className='text-white pb-4'>Hi,My name is Vetri.I am a Full Stack Web Developer.I built responsive website with React.js and TailwindCss</p>
        <p className='text-white pb-4'>I am proficient in frontend skills like Reactjs,Redux Tool Kit,Axios,Tailwind,CSS,Javascript and many more</p>
        <p className='text-white'>In backend I know Node.js,Expressjs,MongoDB and Mongoose</p>
        </div>
    </div>
  </section>
}

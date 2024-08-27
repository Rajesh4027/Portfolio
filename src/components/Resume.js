import ResumeImg from '../assets/resume.png'

export default function Resume() {
  return <section className='flex flex-col sm:flex-row  bg-violet-500' id='resume'>
    <div className='md:w-1/2 px-2 py-5 flex justify-center'>
        <img src={ResumeImg} className='w-[400px] rounded-2xl'  />
    </div>
    <div className='md:w-1/2 flex justify-center px-4 py-3'>
        <div className='flex flex-col justify-center'>
        <h1 className='text-4xl text-white border-b-4 mb-5 w-[180px] border-b-violet-900 font-bold'>About Me</h1>
        <p className='text-white pb-4'>You can view my resume <a href="#" className='btn'>Download</a></p>
        </div>
    </div>
  </section>
}

import WebsiteImg from '../assets/ecommerce.png';
import WebsiteImg1 from '../assets/foodecommerce.png'
import Websiteblog from '../assets/websiteblog.png'

export default function Projects() {
    return <section className="flex flex-col py-20 px-5 justify-center bg-violet-500 bg-radius text-white">
        <div className=" text-4xl mb-3 w-full">
            <div className="flex flex-col px-10">
                <h1 className='border-b-4 border-dotted border-violet-950 w-36'>Projects</h1>
                <p className='text-2xl py-3'>These are my projects.I have built these with Reactand vanilla CSS,Check them out.</p>
            </div>
        </div>
        <div className='w-full'>
        
            <div className="flex flex-col md:flex-row px-10 gap-5">
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={WebsiteImg} />
                    <div className='project-desc'>
                        <p className='py-5 text-center'>A Ecommerce Website.Built with Mern Stack</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={WebsiteImg1} />
                    <div className='project-desc'>
                        <p className='py-5 text-center'>Food Ecommerce Website like Swiggy,Build with Angular</p>
                    </div>
                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={Websiteblog} />
                    <div className='project-desc'>
                        <p className='py-5 text-center'>Basic Blog website. Buil wit next Js and mongodb</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
}

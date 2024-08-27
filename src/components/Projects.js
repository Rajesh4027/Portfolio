import WebsiteImg1 from '../assets/ecommerce.png';
import WebsiteImg2 from '../assets/foodecommerce.png'
import WebsiteImg3 from '../assets/websiteblog.png'

export default function Projects() {

    const config = {
        projects: [
            {
                image: WebsiteImg1,
                description: 'A Ecommerce Website.Built with Mern Stack',
                link: 'https://github.com/Rajesh4027'
            },
            {
                image: WebsiteImg2,
                description: 'Food Ecommerce Website like Swiggy,Build with Angular',
                link: 'https://github.com/Rajesh4027'
            },
            {
                image: WebsiteImg3,
                description: 'Basic Blog website. Buil wit next Js and mongodb',
                link: 'https://github.com/Rajesh4027'
            },
        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary  text-white" id='projects'>
        <div className=" text-4xl mb-3 w-full">
            <div className="flex flex-col px-10">
                <h1 className='border-b-4 border-dotted border-violet-950 w-36'>Projects</h1>
                <p className='text-2xl py-3'>These are my projects.I have built these with Reactand vanilla CSS,Check them out.</p>
            </div>
        </div>
        <div className='w-full'>

            <div className="flex flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project) => (

                    <div className='relative'>
                        <img className='h-[250px] w-[500px] rounded-2xl' src={project.image} />
                        <div className='project-desc'>
                            <p className='py-5 px-4 text-center'>{project.description}</p>
                        <div className='flex justify-center mt-4'>
                            <a className='btn' target='_blank' href={project.link}>View Project</a>
                        </div>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    </section>
}

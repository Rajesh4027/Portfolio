

export default function Contact() {

  const config = {
     email:'vetri@gmail.com',
     phoneno:'+9828377492'
  }
  return <section className='flex flex-col px-5 py-32 bg-violet-600' id='contact'>
    
        <div className='flex flex-col items-center'>
        <h1 className="text-4xl border-b-4 text-white">Contact</h1>
        <p className="pb-5 text-white">If you want to discuss more details,please contact me!</p>
        <p className="py-2 text-white"><span className="font-bold">Email:</span>{config.email}</p>
        <p className="py-2"><span className="font-bold">Phone:</span>{config.phoneno}</p>
        </div>
    
  </section>
}

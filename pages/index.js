
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaGoogle, FaApple } from 'react-icons/fa';


export default function Home() {
  return (

    // <div className=' grid grid-cols-1 grid-cols-5 grid-rows-5 ' >
    <div className=' grid grid-cols-1 grid-cols-5 grid-rows-5 text-white ' >
      {/* form */}
      <div className='col-span-5 row-span-3 items-center text-black h-fit'>

        <div className='my-10'>
          <h2 className='text-2xl text-center '>Contact us</h2>
          <h3 className='text-2sm  text-center '> Get  in touch with us hjegdyrqygusdweq</h3>

        </div>

        {/* <div className=' '> */}
        <form className='flex flex-col-1 flex-wrap text-center justify-center mx-auto my-8'>

          <div className=' w-screen mx-[24%] my-2 '  >
            <label className=' text-left text-xs font-bold py-1' style={{ display: ' block ' }}>Enter Name</label>
            <input type="text" name="name" className='bg-contact-input border px-1 py-2 rounded-md outline-none text-l w-full gap-2.5' />
          </div>

          <div className=' w-full mx-[24%] my-2 '  >
            <label className=' text-left text-xs font-bold py-1' style={{ display: ' block ' }}>Enter email address</label>
            <input type="email" name="eamil" className='bg-contact-input border px-1 py-2 rounded-md outline-none text-l w-full gap-2.5' />
          </div>

          <div className=' w-full mx-[24%] my-2 '  >
            <label className=' text-left text-xs font-bold py-1' style={{ display: ' block ' }}>Enter Phone number</label>
            <input type="tel" name="phone Numbr" className='bg-contact-input border px-1 py-2 rounded-md outline-none text-l w-full gap-2.5' />
          </div>

          <div className=' w-full mx-[24%] my-2'  >
            <label className=' text-left text-xs font-bold py-1' style={{ display: ' block ' }}>Message</label>
            <input type="text" name="message" style={{ height: ' 150px ' }} className='bg-contact-input border px-1 py-2  rounded-md outline-none text-l w-full gap-2.5' />
          </div>

          <div className='w-full mx-[24%] my-2 grid justify-items-stretch'>
            <button className=' justify-self-end p-[10px] w-[32%] border-2 text-sm  bg-colony-purple rounded-md  text-center text-white '>
              Send Message
            </button>
          </div>


        </form>

        {/* </div> */}

      </div>
      {/* contacts*/}
      <div className='bg-colony-purple col-span-5 row-span-5  '>

        <div className='flex flex-col-1 flex-wrap w-full h-full px-11'>
          {/* rignt side */}
          <div className='w-1/2  h-fit'>

            <h1 className='bg-colony-purple text-white my-5 text-center w-24 h-12 border'> LOGO Here  </h1>

            <p className='mb-2 text-sm'>Sign Up for Our newsletter updates</p>

            <div className=' flex flex-col-1 flex-wrap text-center bg-white w-10/12 rounded-md pl-4'>
              <input placeholder='Enter your Email' type="email" name="eamil" className='text-black outline-none w-3/4 text-md gap-2.5' style={{ height: ' 50px ' }} />
              <button type='Submit' id='subscribe' className='bg-colony-light border border-colony-light px-1 w-1/4 py-2 rounded-md ' style={{ height: ' 60px ' }}> Subscribe</button>
            </div>

            <div className='m-1 flex'>
              {/* not done with image but with div, I tried image via tailwind but it did now show.!!!!  #####*/}
              <div className='bg-hero-pattern border-2 rounded-[100%] bg-white w-12 h-12 m-4'></div>
              <div className='bg-hero-pattern border-2 rounded-[100%] bg-white w-12 h-12 m-4'></div>
              <div className='bg-hero-pattern border-2 rounded-[100%] bg-white w-12 h-12 m-4'></div>
              <div className='bg-hero-pattern border-2 rounded-[100%] bg-white w-12 h-12 m-4'></div>
            </div>
          </div>

          {/* left side */}
          <div className=' w-1/2 py-[11%]'>
            <div className='text-center'>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
              <p>Company Company Company</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

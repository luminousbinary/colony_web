
    // this whole page goes into the return function in index.js
    <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main.hidden}>

      <div className=' grid grid-cols-1  l:grid-cols-2  md:grid-cols-2 h-screen w-full' >
        {/* text and bg picture */}
        <div className='hidden w-full md:block bg-gradient-to-tr from-gray-500 to-gray-500 relative'>
          <img src='https://sellingdelawarehomes.com/delaware-real-estate/wp-content/uploads/2019/07/Arranging-Furniture-photo.jpg' className='w-full h-full object-cover absolute mix-blend-overlay' />

          <div className='py-36 px-12 p-5 '>
            <p className=' text-white'>The Future Of</p>
            <h2 className='text-2xl font-bold  text-white'>Living Is Here</h2>
            <p className='text-white'>Rent House at affordable Prices, </p>
            <p className='text-white'> Best offers with better quality</p>
          </div>
        </div>

        {/* login */}
        <div className='rounded-2xl py-[15%] px-[11%] xl:px-20 sm:py-[5%] px-[3%]'>
          <div className='m-[14%] xl:m-24 min border-2 border-purple-900 rounded-md'>
            <div className='flex items-center text-center border-b-2 border-purple-900'>
              <div className=' p-1 w-2/4 bg-purple-900 rounded-r-md '> <a href='#' className=' text-white text-sm'> login</a></div>
              <div className=' p-1 w-2/4  hover:bg-purple-100'><a href='#' className=' text-purple-900 text-sm'> sign up</a></div>
            </div>
            <div className='py-6 text-center'>
              <p className='font-bold text-xs'>Please Login into your Account</p>
            </div>
            {/* for email lofin */}
            <div className='flex flex-col text-center justify-center px-3'>
              <form className='max-w-[400px] w-fill mx-auto'>
                <div className=' text-left  w-full p-2'>
                  <label className='text-xs font-bold'>Email address</label>
                  <input type="email" name="email" className='bg-white border border-purple-900 px-4 py-1 rounded-md outline-none text-l w-full' />
                </div>

                <div className='text-left w-full p-2'>
                  <label className='text-xs font-bold'>Password</label>
                  <input type={"password"} name="password" className='bg-white border border-purple-900 px-2 py-1 rounded-md outline-none text-l w-full' />

                </div>
                <div className='flex w-full  '>
                  <a href='#' className='text-xs text-purple-900 font-bold  w-full text-right pr-3 '>Forgot Password</a>
                </div>

                <button className=' w-full border-2 text-sm my-3 bg-purple-900 rounded-md w-2/4 text-center py-1 inline-block text-white hover:bg-purple-700'>
                  Login
                </button>

              </form>
              <p className='text-xs'> Or Connect with</p>
            </div>


            {/* for social login */}
            <div className='flex justify-center my-2'>
              <a href='#' className=' p-4 mx-2'> <FaGoogle /> </a>
              <a href='#' className=' p-4 mx-2'> <FaApple /> </a>
            </div>
          </div>
        </div>

      </div>
    </main>

  </div >
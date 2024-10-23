import React from 'react'

import banner from '../assets/books.jpg'
import Footer from './Footer'

function Banner() {
  return (

    <>
    <div className='max-w-screen-2xl max-auto flex flex-col md:flex-row  md:m-20'>
<div className=' w-full order-2 md:order-1 md:w-1/2 m-2'>
<h1 className='text-2xl  font-bold'>Welcome to <span className='font-bold '> PaperGarden </span> <span className='text-blue-700'>– A World of Words Awaits You</span> </h1>

<p className='text-lg'>At PaperGarden, we believe that every book opens a new world of possibilities. Whether you are seeking knowledge, adventure, or inspiration, our collection is thoughtfully curated to cater to every reader. Let the pages unfold endless stories and ideas that will captivate your mind and heart."</p>

<div>
<label className="input input-bordered flex items-center gap-2 w-96 m-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-active btn-secondary bg-blue-700">Send</button>
</div>

</div>



<div className='w-full  order-1 md:w-1/2  mr-3 mt-0  '>

<img src={banner}  alt='booksimage' className='w-96 mr-3' />

</div>

    </div>

   

    </>
  )
}

export default Banner
import React from 'react'

const Header = () => {
  return (
    <div className='w-[100%] h-[60px]  items-center gap-[30px]   bg-[#272730]  grid grid-cols-12' >
      <div id="h1"  className='border-[white] grid place-items-center border h-[40px]  ' >     
      {/* <i class="fa-solid fa-signal text-[white] "></i> */}
      {/* <i class="fa-solid fa-sliders text-[white] text-[20px] "></i> */}
      {/* <i class="fa-regular fa-chart-bar text-[white] text-[20px] "></i> */}
      {/* <i class="fa-solid fa-qrcode  text-[white] text-[20px] "></i> */}
      <i class="fa-solid fa-bars-staggered text-[white] text-[20px] "></i>

      </div>
      <div id="h2"  className='border-[white] border h-[40px]  col-span-3 text-[white] grid place-items-center ' >

          <span className=' '> <i class="fa-solid fa-hashtag  text-[20px] "></i>  Tushal Shekh </span>

      </div>
      <div id="h3"  className='border-[white] border h-[40px] col-span-5 ' >

        

      </div>
      <div id="h4"  className='border-[white] border h-[40px] col-span-3 ' ></div>
      
    </div>
  )
}

export default Header

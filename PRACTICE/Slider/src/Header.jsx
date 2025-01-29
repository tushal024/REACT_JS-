import React from 'react'
import Slider from './Slider'

function Header() {
  return (
    <div className=' border-[red] ' >
      
     
        <header class="  border-[red] " id='hea' >
            <div class="container1  h-[100vh]   border-[red]   w-[100%] ">
                <nav>
                    <div class="n1 hidden   w-[100%] h-[60px]  xl:flex justify-between ">
                        <div class="m w-[25%] h-[100%]  flex">
                            <div class="ko  h-[100%] w-[100%]  flex  items-center">
                                <div class="mm ms-[12%] h-[100%]  flex justify-between items-center">
                                    {/* <img src="/assets/headphones.png" alt="" class="xl:w-[24px]"> */}

                                </div>
                                <div class="mm1 w-[100%]    h-[100%] ms-[10px]  flex justify-center items-center">
                                    <p  className='  font-[600] ' >Welcome to our IT Solution Company!</p>
                                </div>
                            </div>
                            {/* <div class="ko  h-[100%] w-[50%]  flex justify-between items-center">
                                <div class="mm ms-[5%] h-[100%] flex justify-between items-center">
                                    <img src="/assets/mail-inbox-app.png" alt="" class="xl:w-[24px]">

                                </div>
                                <div class="mm1  h-[100%]  flex justify-center items-center">
                                    <p>info@example.com</p>
                                </div>
                            </div> */}

                        </div>
                        <div class="m1 w-[30%] h-[100%]  flex">


                            <div class="ko  h-[100%] w-[40%]  flex  items-center">
                                <div class="mm  h-[100%] flex justify-between items-center">
                                    {/* <i class="fa-solid fa-arrow-right text-[#8308ED]"></i> */}
                                    <i class="fa-solid fa-envelope  text-[white] "></i>

                                </div>
                                <div class="mm1  h-[100%] ms-[10px]  flex justify-center items-center">
                                    <p  className='text-[white]' >   info@xsquaretec.com
                                    </p>
                                </div>
                            </div>
                            <div class="ko h-[100%] w-[60%] ps-[5%] pe-[15%]  flex justify-between items-center">
                                <div class="mm ms-[10%] h-[100%] w-[100%] flex justify-between items-center">
                                    {/* <i class="fa-solid fa-magnifying-glass text-[gray] text-[20px]"></i> */}

                                    <i class="fa-brands fa-facebook    text-[20px]  ms-[5px]  text-[white] "></i>
                                    <i class="fa-brands fa-twitter     text-[20px]  ms-[5px] text-[white] "></i>
                                    <i class="fa-brands fa-linkedin    text-[20px]  ms-[5px]   text-[white] "></i>
                                    <i class="fa-brands fa-instagram   text-[20px]  ms-[5px]    text-[white] "></i>

                                </div>
                              
                            </div>


                        </div>
                    </div>

                    {/* ........................................................................................................ */}
                    <div class="n2 w-[92%] mt-0px] rounded-[5px]  bg-[#FFFFFF] m-[auto]  ps-[10px] flex items-center justify-between  h-[80px] z-50">

                        <div class="logo  xl:w-[16%] md:w-[35%]  h-[100%] flex justify-center items-center">
                                    <img 
                                    src="https://xsquaretec.com/wp-content/uploads/2023/06/x-logo-300x65.png.webp" 
                                    className='w-[100%] 
                                    h-[60%] xl:w-[100%] md:w-[75%] lg:w-[60%] xl:h-[70%] sm:w-[100%]'  alt="" />


                                    

                            {/* <img src="https://xsquaretec.com/wp-content/uploads/2023/06/x-logo-300x65.png.webp" alt=""
                                class=" lov w-[90%] h-[60%] xl:w-[100%] md:w-[75%] lg:w-[60%] xl:h-[80%] sm:w-[100%]"> */}
                        </div>
                        <nav class=" w-[60%] h-[100%]  hidden xl:block">
                            <ul class="flex justify-evenly items-center w-[100%] h-[100%]">
                                <li><a href="" class="text-[17px] font-[600]">HOME </a></li>
                                <li><a href="" class="text-[17px] font-[600]">ABOUT US</a></li>
                                <li><a href="" class="text-[17px] font-[600]">SERVICES <i
                                            class="fa-solid fa-angle-down"></i> </a></li>
                                <li><a href="" class="text-[17px] font-[600]">PAGES <i
                                            class="fa-solid fa-angle-down"></i> </a></li>
                                <li><a href="" class="text-[17px] font-[600]">BLOG <i
                                            class="fa-solid fa-angle-down"></i> </a></li>
                                <li><a href="" class="text-[17px] font-[600]">CONTACT US</a></li>
                            </ul>
                        </nav>
                        <div class="bt  w-[20%] h-[100%] xl:flex justify-center items-center hidden xl:block">
                            {/* <button id="chh"
                                class="  btu_color text-[red] w-[120px] px-[10px] h-[40px]  rounded-[16px] text-[17px] ">Log
                                In</button> */}



                                        <div id="ss"  className='me-[20px]' >
                                        <i class="fa-solid fa-phone-volume  text-[#FF5500]  text-[40px] "></i>
                                        </div>
                                        <div id="ss1">

                                            <p  className='text-[18px ]  text-[gray] ' > Call Any Time </p>
                                            <h3  className='text-[blue]  font-[600] text-[20px] ' > (+91) 8511489200  </h3>
                                        </div>


                        </div>
                        {/* <i
                            class="ri-menu-line   xl:hidden text-[28px] btu_color px-[10px] text-[red] rounded-[5px] md:me-[20px] lg:me-[50px]"></i> */}
                    </div>

                    {/* ........................................................................................................ */}



                </nav>

                <div class="section_1 w-[100%]  h-[auto] xl:h-[auto] mt-[20px] ">
                    <div class="container1 flex  h-[100%]   pe-[5%] ">
                        <div class="s1 w-[90%] ms-[5%] lg:w-[70%] lg:ms-[5%] xl:w-[50%] xl:pe-[10%] xl:h-[90%]   text-start">
                            <h1 class="text-[20px]  xl:text-[25px] font-[600] text-[#FF5500]">We Are Creative</h1>
                            <h1 class="text-[50px]   xl:text-[60px] font-[600]  leading-[65px] mt-[20px] text-[#1D155C] mt-[-20px]">
                                
                              <span  className='  text-[black] ' >  Best IT </span>
                              <span  className=' text-[#FF5500] ' >

                            Solution Company
                              </span>


                            </h1>
                            <p class="xl:me-[0%] text-[#1D155C] text-[15px]
                xl:text-[24px]   mt-[20px] ">
                    We aim to commit to converting clients dream into the actual goal with personalizing IT Solution.
                
                </p>

                            <button 
                                class=" text-[#FF5500] border btu_color w-[170px] px-[10px] h-[40px] rounded-[16px] text-[17px] mt-[20px] " id="chh1">Learn
                                More</button>

                                <button 
                                class=" ms-[20px] text-[#FF5500] border btu_color w-[170px] px-[10px] h-[40px] rounded-[16px] text-[17px] mt-[20px] " id="chh1">Learn
                                More</button>



                        </div>
                        <div class="s2 w-[90%] lg:ms-[5%]  lg:w-[70%] xl:w-[50%] mt-[30px] sm:mt-[0] ms-[5%] h-[90%]   ">
                            <Slider/>
                            
                            {/* <img src="/assets/shape-23.png" alt=""
                                class=" big  absolute w-[200px] sm:w-[360px] xl:w-[800px] right-[10px] xl:top-[-200px]">
                            <img src="/assets/banner-4-1.png" alt=""
                                class=" upo me-[10%] mt-[18%] sm:mt-[o] lg:w-[800px] xl:right-[-130px] lg:top-[190px] xl:w-[1200px] xl:top-[-10%] absolute right-[0]"> */}

                        </div>

                    </div>
                </div>
            </div>

        </header>
   




    </div>
  )
}

export default Header

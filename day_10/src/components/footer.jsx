
function Foot(){
    return( <>
    <footer class="bg-[black] text-white rounded-t-[5%] mt-[100px]">
        <div className="f1 p-3 flex justify-center items-center border-[#454041] border-b h-[100px]">
                <h1 class="text-[1.3vw] font-bold">Building your tech skills has never been easier.</h1>
                <button class="bg-[red] text-white p-2 rounded-lg ms-3 w-[170px]">START LEARNING</button>
        </div>
        <div className="f2 flex justify-between items-center w-[80%] m-[auto] p-3 border-[#454041] border-b">
        <div className="logo h-full flex justify-center items-center">
                <img src="https://www.masaischool.com/images/footer/masai-logo-dark.svg" alt=""/>
            </div>
            <div className="icon flex itens-center h-full">
                <span class="text-[#808080] font-medium">Follow us -</span>
                <i class="fa-brands fa-x-twitter text-[#808080] ms-5 text-[22px]"></i>
                <i class="fa-brands fa-facebook text-[#808080] ms-5 text-[22px]"></i>
                <i class="fa-brands fa-linkedin text-[#808080] ms-5 text-[22px]"></i>
                <i class="fa-brands fa-instagram text-[#808080] ms-5 text-[22px]"></i>
                <i class="fa-brands fa-github text-[#808080] ms-5 text-[22px]"></i>
                <i class="fa-brands fa-youtube text-[#808080] ms-5 text-[22px]"></i>
            </div>
        </div>
        <div className="f3 w-[80%] m-[auto] grid grid-cols-4 gap-4">
            <div className="f33 p-4 ">
                <h1 class="font-medium text-[20px]">Masai Courses</h1>
                <p class="mt-2 font-medium">Software Development - Full Time
                Data Analytics - Full Time</p>
                <h1 class="font-medium mt-4 text-[20px]">IIT For All Courses</h1>
                <p class="mt-2 font-medium">IIT Mandi - Minor in CSE & Adv. Technologies</p>
                <p class="mt-2 font-medium">IIT Ropar - Minor in A</p>
            </div>
            <div className="f33 p-4 ">
                <p class="mt-2 font-medium">Success Stories</p>
                <p class="mt-2 font-medium">Our Team</p>
                <p class="mt-2 font-medium">Careers</p>
                <p class="mt-2 font-medium">Masai Blog</p>
                <p class="mt-2 font-medium">Talent Circle</p>
                <p class="mt-2 font-medium">Masai School Admissions Test (MSAT)</p>
            </div>
            <div className="f33 p-4 ">
                <p class="mt-2 font-medium">Hire From Us</p>
                <p class="mt-2 font-medium">Our Investors</p>
                <p class="mt-2 font-medium">Newsroom</p>
                <p class="mt-2 font-medium">Contact Us</p>
                <p class="mt-2 font-medium">Become Coach</p>
            </div>
            <div className="f33 p-4 ">
                <p class="mt-2 font-medium">About Us</p>
                <p class="mt-2 font-medium">FAQ</p>
                <p class="mt-2 font-medium">Referral Program</p>
                <p class="mt-2 font-medium">Masai Learn</p>
                <p class="mt-2 font-medium">Industry Mentors</p>
            </div>
        </div>
        <div className="f4 flex justify-end items-center w-[80%] m-[auto] border-[#454041] border-b h-[150px]">
            <button>Connect with a growing<br/>
            community of learners</button>
            <button class="text-[#27A8E8] bg-[#313131] rounded-lg w-[250px] h-[50px] ms-5 flex items-center justify-center"><i class="fa-brands fa-telegram text-[#27A8E8] text-[25px] me-2"></i> JOIN OUR TELEGRAM</button>
        </div>
        <div className="f5 w-[80%] flex justify-between items-center m-[auto] h-[80px]">
            <p class="text-[#707070] uppercase">Copyright © Nolan Edutech Private Limited. All rights reserved</p>
            <p class="text-[10px] underline">Privacy Policy & Terms and Conditions</p>
        </div>
    </footer>
      </>
    )
}


export  default Foot


function Header() {

    return (
        <div className="border  flex justify-between">
            <div id="side1" className=" w-[25%]  items-center flex ">
                <div id="logo">

                    <img src="https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" alt="" />
                </div>
                <div id="sel">
                    <select name="" id="" className="bg-[#CAD6EE] h-[40px]  text-[20px]  text-center w-[150px] rounded-[8px]">

                        <option value="" className="text-[20px]">Cources</option>
                        <option value="">Software Development</option>
                        <option value="">Data Analytics</option>
                        <option value="">Machine Learning</option>
                    </select>

                </div>

            </div>
            <div id="side2" className="w-[60%] ps-[10px] pe-[10px] flex  justify-between  border-[black]">

                <ul className="  w-[75%] flex text-[20px] items-center  justify-between ">
                    <li>Scholarship   <i class="fa-solid fa-chevron-down"></i> </li>
                    <li>Success Stories</li>
                    <li>Events</li>
                    <li>Hire From Us </li>
                    <li>Fees</li>
                </ul>

                <div className=" w-[13%]  flex  items-center  justify-between ">
                    <button className="h-[40px] text-[white]  text-[18px]   w-[150px] bg-[#ED0331]  rounded-[8px]">Register</button>
                </div>
            </div>
        </div>
    )
}


export default Header
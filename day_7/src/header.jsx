import './App.css';





function Header(){

    return(
        <header className=" h-[100px]  ">
            <div className="hed1 px-36 h-[60%] bg-[#2874F0] text-white flex items-center justify-around">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" className="w-[80px]" alt="" />
                <div className="input w-[45%] relative">
                <input type="text"  placeholder="Search for products,brands and more" className="p-2 w-full ps-3 rounded-sm"/>
                <i className="fa-solid fa-magnifying-glass text-[#2874F0] absolute right-4 top-3"></i>
                </div>
                <button className="text-[#2874F0] bg-white p-1 w-[100px] rounded-sm">Login</button>

                <span className="font-bold">Become a Seller</span>
                <span className="font-bold">More <i className="fa-solid fa-angle-down fa-2xs text-white"></i></span>
                <span className="font-bold">Cart <i className="fa-solid fa-cart-shopping fa-sm text-white"></i></span>
            </div>
            <div className="hed2 px-20 bg-[white]  h-[40%] flex justify-evenly items-center text-[13.5px] font-bold">
                <a href="">Electronics <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">TVs & Appliances <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Men <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Women <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Baby & Kids <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Home & Furniture <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Sports, Books & More <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Flights <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
                <a href="">Offer Zone <i className="fa-solid fa-angle-down fa-2xs text-[gray]"></i></a>
            </div>
           
        </header>
    )
}

export default Header     

import { useState } from "react"


function Cart() {

    let [arr, setarr] = useState([
        { name1: "Prateek Shukla", post: "Founder & CEO" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" },
        { name1: "Yogesh Bhat", post: "Co Founder and SVP" },
        { name1: "Keshav Misra", post: "Senior Vice President" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" },
        { name1: "Nrupul Dev", post: "Co-Founder & CTO" }
    ])

    
    return (<div>

        <div className="text-center flex flex-col 	">
            <h1 className="text-[40px] font-[700] ">Leadership Team</h1>
            <p className="w-[75%] text-center ms-[12%] text-[gray] text-[18px] mt-[20px]">
                With more than 70 years of combined experience in technology, engineering and design our Executive Team has one common goal - “Unlock the human potential of India by transforming the education system”

            </p>

        </div>
        <div className=" flex h-[300px] w-[90%] ms-[5%] justify-between items-center mt-[50px]">

            <div id="c1" className="border rounded-[20px] h-[300px] w-[20%]  text-center text-[white] ">
                <h6 className="mt-[80%] text-[20px] font-[700]"> {arr[0].name1}

                </h6>
                <p> {arr[0].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c2" className="border rounded-[20px] h-[300px] w-[20%]   text-center text-[white]">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[1].name1}

                </h6>
                <p>{arr[1].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c3" className="border rounded-[20px] h-[300px] w-[20%]   text-center text-[white]">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[2].name1}
                </h6>
                <p> {arr[2].post} </p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c4" className="border rounded-[20px] h-[300px] w-[20%]  text-center text-[white] ">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[3].name1}

                </h6>
                <p>{arr[3].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>

        </div>

        <div className=" flex h-[300px] w-[90%] ms-[5%] justify-between items-center mt-[50px]">

            <div id="c11" className="border rounded-[20px] h-[300px] w-[20%]  text-center text-[white] ">
                <h6 className="mt-[80%] text-[20px] font-[700]"> {arr[0].name1}

                </h6>
                <p> {arr[0].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c22" className="border rounded-[20px] h-[300px] w-[20%]   text-center text-[white]">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[1].name1}

                </h6>
                <p>{arr[1].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c33" className="border rounded-[20px] h-[300px] w-[20%]   text-center text-[white]">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[2].name1}
                </h6>
                <p> {arr[2].post} </p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>
            <div id="c44" className="border rounded-[20px] h-[300px] w-[20%]  text-center text-[white] ">
                <h6 className="mt-[80%] text-[20px] font-[700]">{arr[3].name1}

                </h6>
                <p>{arr[3].post}</p>
                {/* <i class="fa-brands fa-linkedin text-[#1265BF] "    ></i> */}
                <i class="fa-brands fa-linkedin-in  text-[#1265BF]   text-[19px] "></i>
                <i class="fa-brands fa-twitter   text-[#1265BF]      text-[19px] ms-[10px] "></i>


            </div>

        </div>

    </div>
    )
}



export default Cart
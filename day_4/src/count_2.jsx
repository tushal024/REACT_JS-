import { useState } from "react";
import Cou from "./count";

function Cou_2(op){
    let [count_1,a2]=useState(25)

    return (
        <div>
            <h2 className="c2">{op.b}</h2>
            {/* <h1>{count_1}</h1> */}
        </div>
        
    )
}




export default Cou_2
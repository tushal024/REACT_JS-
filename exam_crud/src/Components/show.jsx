

function Show({ pass, delete_1, Edit_data, t_arr, tt }) {

    return (
        <div className="main" >

            {
                tt == false ? 
                    pass.map((e) => {
                        return (
                            <div key={e.id} id="nm">
                                <div className="ss">
                                    <img src={e.img} alt="" width={"200px"} height={"300px"} /> <br />
                                    <h4> {e.name1} </h4> <br />
                                    <h4> {e.price} </h4> <br />
                                    <h4> {e.des} </h4> <br />

                                    <button id="dd" onClick={() => { delete_1(e.id) }} >DELETE</button>
                                    <button onClick={() => { Edit_data(e.id) }} >EDIT</button>

                                </div>
                            </div>
                        )

                    })
                

                    :

                    
                        t_arr.map((e) => {
                            return (
                                <div key={e.id}>
                                    <div className="ss">
                                        <img src={e.img} alt="" width={"200px"} height={"300px"} /> <br />
                                        <h4> {e.name1} </h4> <br />
                                        <h4> {e.price} </h4> <br />
                                        <h4> {e.des} </h4> <br />

                                        <button id="dd" onClick={() => { delete_1(e.id) }} >DELETE</button>
                                        <button onClick={() => { Edit_data(e.id) }} >EDIT</button>

                                    </div>
                                </div>
                            )

                        })
                    
            }


        </div>


    )
}


export default Show
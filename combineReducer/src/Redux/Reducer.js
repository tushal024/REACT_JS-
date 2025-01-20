


let St = {
    loading: false,
    isLogin: false,
    user_data: "",
    error: false
}

 export let Red = (state=St, { type, payload }) => {

    switch (type) {
        case "Loading":
            return { ...state, loading: true }
        case "isLogin":
            return { ...state, loading: false, isLogin: true, user_data: payload }
        case "error":
            return { ...state, loading: false, error: true }
        default:
            return state     
    }
}


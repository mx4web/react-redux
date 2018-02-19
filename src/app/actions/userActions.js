export function setName(name){

    //simulate server side data fetch, need to install redux-thunk middleware
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //             type: "SET_NAME",
    //             payload: name
    //         });
    //     }, 2000);
    // };

    //need to install redux-promise-middleware, npm install redux-promise-middleware --save
    return {
        type: "SET_NAME",
        payload: new Promise((resolve) => {
            setTimeout(() => {
                resolve(name);
            }, 2000);
        })
    };
}

export function setAge(age){
    return {
        type: "SET_AGE",
        payload: age
    };
}
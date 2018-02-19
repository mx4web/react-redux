const userReducer = (state = {
    name: "Michelle",
    age: 27
}, action) => {
    switch(action.type){
        case "SET_NAME_FULFILLED":
            state = {
                ...state, //spread operator
                name: action.payload
            };

            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;
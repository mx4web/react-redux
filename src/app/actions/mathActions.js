export function addNumber(number){
    return {
        type: "ADD",
        payload: number
    };
}

export function subtract(number){
    return {
        tpe: "SUBTRACT",
        payload: number
    };
}
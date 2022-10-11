import { ADD_TO_CART ,REMOVE_TO_CART} from "./constrants";

export const addToCart = (data)=>{
    console.log("action data value",data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const removeToCart=(id)=>{
    return{
        type:REMOVE_TO_CART,
        data:id
    }
}
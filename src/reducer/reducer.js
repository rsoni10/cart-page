import { ADD_TO_CART,REMOVE_TO_CART } from "../action/constrants";
const initialState = {
  cardData:[]
}
const reducer = (state=initialState , action)=>{
 switch (action.type) {
  case ADD_TO_CART:
    console.log("reducer data value",action)

    return{
      ...state,
      cardData:action.data
    }
    break;
  // case REMOVE_TO_CART:{

  // }
  default: return state 
 }
}

export default reducer;
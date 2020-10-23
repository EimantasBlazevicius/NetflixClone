import axios from "axios";

export default function reducer(initialState={
  token: "",
  fav:[],
  apiEndpoint: "https://academy-video-api.herokuapp.com/content/free-items",
  isLoggedIn:false
}, action){

    switch(action.type){
        case "UPDATE_TOKEN":
          console.log(action.payload.token)
          return {...initialState, token: action.payload.token, apiEndpoint:"https://academy-video-api.herokuapp.com/content/items"}
        case "UPDATE_FAV":
          const newFav = action.payload.appendedFav
          return {...initialState,fav:newFav}
        case "SIGN_OUT":
          return {...initialState,token:""}
        case "REGISTER_TOKEN":
          return {...initialState,token:action.payload.token,apiEndpoint:"https://academy-video-api.herokuapp.com/content/items"}
        default:
          return {...initialState}
    }
    
}

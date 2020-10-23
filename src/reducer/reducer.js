export default function reducer(initialState={
  token: "",
  fav:[],
  apiEndpoint: "https://academy-video-api.herokuapp.com/content/free-items",
  isLoggedIn:false
}, action){

    switch(action.type){
        case "UPDATE_TOKEN":
            const newToken = action.payload.token
            const newApiEndpoint = (newToken) => {
              return newToken === ""
                ? "https://academy-video-api.herokuapp.com/content/free-items"
                : "https://academy-video-api.herokuapp.com/content/items"
            }
            return {...initialState, token: newToken, apiEndpoint:newApiEndpoint()}
        case "UPDATE_FAV":
            const newFav = action.payload.appendedFav
            return {...initialState,fav:newFav}
        case "SIGN_OUT":
            return {...initialState,token:""}
        default:
          return {...initialState}
    }
    
}

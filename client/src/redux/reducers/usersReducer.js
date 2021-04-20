const initialState = {
    loading: false,
    users: [],
    error: ''
  }


//   return {
//     loading: false,
//     users: action.payload,
//     error: ''
//   }
const reducer = (state = initialState , action) =>{


    switch(action.type) {
        case 'FETCH_ALL':
            return{
                loading: false,
                users: action.payload,
                error: ''
              } 

        case 'CREATE':
            return state;

       default:
           return state; 
    }
}
export default reducer;
import {createStore} from 'redux'



const initialState = {
    
    todo:[],
   
}

 const reducer  = (state = initialState, action) => {
    switch (action.type){
        case 'add': 
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        
        case 'delete': 
            return {
              ...state,
              todo: [...state.todo.filter((todo, index) => index !== action.payload)]

            }
            default:
                return state
        
    }

 }





const store = createStore(reducer)


export default store 
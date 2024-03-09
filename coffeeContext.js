import { createContext, useReducer } from 'react';
export const CoffeeContext = createContext();
export const coffeeReducer = (state,action)=>{
  switch(action.type){
    case 'SET_COFFEES':
      return{
        coffees:action.payload
      }
    case 'SET_COFFEE':
      return{
        coffees:{
          ...state.coffees,
          [action.payload._id]:action.payload
        }
      }
    case 'CREATE_COFFEE':
      return{
        coffees:[action.payload,...state.coffees]
      }
    case 'DELETE_ALL_COFFEE':
      return{
        ...state,coffees:[],
      }
    default:
      return state
  }
}
export const CoffeeContextProvider = ({children})=>{
  const [state,dispatch] = useReducer(coffeeReducer,{
    coffees:[]
  })
  return(
    <CoffeeContext.Provider value={{...state,dispatch}}>
      {children}
    </CoffeeContext.Provider>
  )
}
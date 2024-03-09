import { useContext } from "react";
import { CoffeeContext } from '../contexts/coffeeContext';
export const useCoffeeContext = ()=>{
  const context = useContext(CoffeeContext);
  if(!context){
    throw Error('useCoffeeContext must be used in CoffeeContextProvider');
  }
  return context;
}
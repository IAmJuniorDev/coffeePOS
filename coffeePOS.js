import CoffeeDetail from "../components/coffee/coffeeDetail";
import CoffeeOrder from "../components/coffee/coffeeOrder";
import '../style/coffeePOS.css';
import { CoffeeContextProvider } from '../contexts/coffeeContext';

const CoffeePOS = ()=>{
    return(
        <CoffeeContextProvider>
            <div className="coffeePOS-container">
                <CoffeeDetail />
                <CoffeeOrder />
            </div>
        </CoffeeContextProvider>
    )
}

export default CoffeePOS;
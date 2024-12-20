import Balance from "./bank_components/Balance";
import Deposit from "./bank_components/Deposit";
import Rich from "./bank_components/Rich";
import Broke from "./bank_components/Broke";
import Withdraw from "./bank_components/Withdraw";
import {useState} from "react";
function App(){
   // const balance = 2500; dont do this, since balance changes use hook(useState:import) to manage it
    const [balance, setBalance] = useState(0); //syntax for managing state
    //setBalance(1000) Dont update a state like this
   // setBalance(balance + 1000)
   function handleWithdraw(amount){
    if(balance >=amount){
        setBalance(balance - amount)
    }else{
        alert('Your balance is too low')
    }
   
   }
   function handleDeposit(amount){
    setBalance(balance + amount)
   }
    return(
        <div className="container">
            <h1> Bank App </h1>
            {/* Displaying components based on condition */}
            {
                balance > 1000 ? <Rich/> : <Broke/>
            }
            <Balance bal = {balance}/>
            <Withdraw bal = {balance} abc={handleWithdraw}/>
            <Deposit bal = {balance} xyz={handleDeposit}/>
        </div> 
    )

}
export default App;
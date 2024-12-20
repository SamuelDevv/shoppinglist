import { useState } from "react"

const Withdraw = ({bal, abc}) => {
    const[amount, setAmount] = useState(0)

    function updateAmount(e){
        setAmount(e.target.value)
    }

    function handleWithdraw(){
        if(amount === "" || amount === 0){
            alert("How much are you withdrawing")
        }else{
            abc(amount)
        }
    }

    return (
        <div className="row">
            <div className="col">
                <input type="Number" className="form-control" placeholder="amount" value={amount} onChange={updateAmount}/>
                <button className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
                <p>Your withdrawal limit is: <strong> {bal} </strong></p>
            </div>
        </div>
    )
}
export default Withdraw
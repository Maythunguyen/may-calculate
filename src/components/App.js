import React, { useState } from "react";
import "../App.css";

function App() {

    const [amounts, setAmounts] = useState ({
        '$100' : 0,
        '$50' : 0,
        '$20' : 0,
        '$10' : 0,
        '$5' : 0,
        '$2' : 0,
        '$1' : 0,
        '$0.5' : 0,
        '$0.2' : 0
    })

    const [totalCash,setTotalCash] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAmounts({ ...amounts, [name]: Number(value) || 0})

    }


    const submitForm = (e) => {
        e.preventDefault()
        const total = calculateTotal();
        setTotalCash(total);
    }

    const calculateTotal = () => {
        return Object.entries(amounts).reduce((total, [key, value]) => {
            const multiplier = key === '$100' ? 100:
                                key === '$50' ? 50:
                                key ==='$20' ? 20:
                                key === '$10' ? 10:
                                key === '$5' ? 5:
                                key === '$2' ? 2:
                                key === '$1' ? 1:
                                key === '$0.5' ? 0.5:
                                0.2
        return total + (value * multiplier);
        }, 0)


    }

    return(
        <div className="app">
            <div className="heading"><h1> MAY CALCULATION</h1></div>
            <div>
                <form onSubmit={submitForm}>
                {Object.keys(amounts).map((denomination, index) => (
                    <div key={index} className="cash-input">

                    <div className="name"><h2>{denomination}</h2></div>

                    <input 
                        type="number"
                        name={denomination}
                        value={amounts[denomination]}
                        onChange={handleChange}

                    />

                </div>
                

                ))}
                
            
                <button className="button-86" type="submit">Calculate</button>
                <div className="total">
                    <h1>Total: ${totalCash}</h1>
                </div>

                </form>
            </div>
        </div>
    )

        
    
    }

export default App;
import React, {useState} from 'react'
import Button from "./assets/components/Button"

const App = () => {
  const [state, setState] = useState(500)

  const minusTenEuros = () => {
    setState (state - 10)
  }

  const minusTwentyEuros =()=> {
    setState(state - 20)
  }

  const minusFifthyEuros =()=> {
    setState(state - 50)
  }

  const minusHundredEuros =()=> {
    setState(state - 100)
  }

  const minusAllEuros =()=> {
    setState(state - state)
  }
  
  const addTenEuros =()=> {
    setState(state + 10)
  }
  
  const addTwentyEuros =()=> {
    setState(state + 20)
  }
 const addFifthyEuros =()=> {
    setState(state + 50)
  } 
  const addHundredEuros =()=> {
    setState(state + 100)
  } 
  return (  
    <div className="bank-amount">
     <h1>Pradinė suma:{state} eurų</h1> 
  
    <div className="minus-button">
    <Button title="išsiimti 10 eurų" onClick ={minusTenEuros}></Button>
    <Button title="išsiimti 20 eurų" onClick ={minusTwentyEuros}></Button>
    <Button title="išsiimti 50 eurų" onClick ={minusFifthyEuros}></Button>
    <Button title="išsiimti 100 eurų" onClick ={minusHundredEuros}></Button>
    <Button title="išsiimti visus" onClick ={minusAllEuros}></Button>
<div className = "add-button">
    <Button title="pridėti 10 eurų" onClick ={addTenEuros}></Button>
    <Button title="pridėti 20 eurų" onClick ={addTwentyEuros}></Button>
    <Button title="pridėti 50 eurų" onClick ={addFifthyEuros}></Button>
    <Button title="pridėti 100 eurų" onClick ={addHundredEuros}></Button>
</div>
</div>
</div>
)
}
export default App

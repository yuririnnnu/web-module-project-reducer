import React, {useReducer} from 'react';
import reducer, {initialState} from './../reducers';
import { applyNumber, actionCreator} from './../actions';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const handle1Click = () => {
  //   console.log("handle1Clicked!")
  //   dispatch(addOne());
  // }
  const handleChange = num => {
    dispatch(applyNumber(num))
  }

  const handleOperator = op => {
    dispatch(actionCreator(op))
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>handleChange(1)}/>
              <CalcButton value={2} onClick={()=>handleChange(2)}/>
              <CalcButton value={3} onClick={()=>handleChange(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>handleChange(4)}/>
              <CalcButton value={5} onClick={()=>handleChange(5)}/>
              <CalcButton value={6} onClick={()=>handleChange(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>handleChange(7)}/>
              <CalcButton value={8} onClick={()=>handleChange(8)}/>
              <CalcButton value={9} onClick={()=>handleChange(1)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>handleOperator("+")}/>
              <CalcButton value={"*"} onClick={()=>handleOperator("*")}/>
              <CalcButton value={"-"} onClick={()=>handleOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

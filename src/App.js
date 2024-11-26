import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations=["+","-","*","/"];
  const [firstNumber, setfirstNumber] = useState("");
  const[secondNumber, setSecondNumber]=useState("")
  const[operation, setOperation]= useState("");
  const[result,setResult]= useState(0);
  
  useEffect(()=>{
    // console.log(Number(currentOperation));
    console.log(result);
  },[result]);

  const clickNumbers=(val)=>{
    if(operation==""){
    setfirstNumber(firstNumber+val);
  }
  else{
    setSecondNumber(secondNumber+val);
  }
}
     const clickOperartion=(val)=>{
      setOperation(val);
     }
     function performOperartion(){
      switch(operation){
        case"+":
        setResult(Number(firstNumber)+Number(secondNumber));
        break;
        case"-":
        setResult(Number(firstNumber)-Number(secondNumber));
        break;
        case"*":
        setResult(Number(firstNumber)*Number(secondNumber));
        break;
        case"/":
        setResult(Number(firstNumber)/Number(secondNumber));
        break;
      }
     }
    
 return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <h1>
          {firstNumber}
         {operation}
         {secondNumber}={result}
          </h1>
        </div>
      <div className="buttons">
        <div className="leftSide">
          <div id="seeResult" onClick={performOperartion}>
            see result
          </div>
          <div className="numbers">
            {numbers.map((val, key) => {
              return <div id="individualnumber" onClick={()=>{clickNumbers(val)}}>{val}</div>;
            })}
          </div>
        </div>
        <div className="rightSide">
          {
            operations.map((val,key)=>{
              return <div id="operation" onClick={()=>{clickOperartion(val)}}>{val}
             </div>
            })
          }
         </div>
      </div>
      </div>
    </div>
  );
}

export default App;

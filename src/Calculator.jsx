import React from "react"
import Icon from "./Icon.jsx"
import Button from "./Button.jsx"
import Dropoption from  "./Dropoption.jsx"
import CheckBox from  "./CheckBox.jsx"
import InputField from  "./InputField.jsx"


const Calculator = (props) => {
  const [text, setText] = React.useState("");
const handleChange = (event) => {
    setText(event.target.value);
  };

return(<>

<form>

    <div>
  <label> Number of employees 
  <InputField onChange={handleChange}
    text={text}></InputField>
  </label>
    </div> 
  
      <Dropoption ></Dropoption>
      <CheckBox ></CheckBox> 

    <div>
    
      <Button action="Calculate" > </Button>
  
    </div> 
  
  <label> Your Space Estimate Is: 
    {
    text*8
    }
  </label>
      
    <div>
      <Button action="Send by Email" > </Button>
    </div>
  
</form>

  {
    
  }
</>)
};

export default Calculator;
import React from "react"
const InputField = (props) => {

return(<>

<input required 
  type="text" 
  className="Pax"
  onChange={props.onChange}
  value={props.text}
  />
</>)
};

export default InputField;
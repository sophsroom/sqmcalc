import React from "react"
const Dropoption = (props) => {
  const [text, setText] = React.useState(false);
const handleChange = (event) => {
    setText(event.target.value);
  };
  
  
  
  
  return (
    <div>
      <select>
        <option value="">Your Choice</option>
        <option value="8">Economic</option>
        <option value="10">Professional</option>
        <option value="12">Spacious</option>
      </select>
    </div>
  );
};

export default Dropoption;
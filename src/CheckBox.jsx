import React from "react"
const CheckBox = (props) => {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  const handleChangeThree = () => {
    setCheckedTwo(!checkedThree);
  };

  return (
    <div>
      <label>Add Office</label>
      <input type="checkbox"
      
        value={checkedOne}
        onChange={handleChangeOne}
      />
      <label> Add One Kitchen</label>
      <input type="checkbox"
        value={checkedTwo}
        onChange={handleChangeTwo}
      />
      <label>Add Meetingroom</label>
       <input type="checkbox"
        value={checkedThree}
        onChange={handleChangeThree}
      />
    </div>
  );
};
export default CheckBox;
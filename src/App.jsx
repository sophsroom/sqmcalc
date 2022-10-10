import './App.css'
import Icon from "./Icon.jsx"
import Button from "./Button.jsx"
import Dropoption from  "./Dropoption.jsx"
export default function App() {
  return (
    <main>
<h2> Office Space Calculator</h2>
<form>

  <div>
      <label htmlFor="Pax"> Number of employees 
      <input required type="text" id="Pax" />
      </label>
  </div> 
  
      <Dropoption></Dropoption>
  
  <div>
      <Button action="Estimated Space" > </Button>
  </div> 
  <label htmlFor="Pax"> The Space you need is : 
  
      </label>
  <div>
      <Button action="Email my Calculation" > </Button>
  </div>
  
</form>
       
    </main>
  )
}

import './App.css'
import Icon from "./Icon.jsx"
import Button from "./Button.jsx"
export default function App() {
  return (
    <main>
    <Icon name="0410"/>
    <Button name="" />
<form>
      <label htmlFor="Name"> Name
      <input required type="text" id="Name" />
      </label>
      <label htmlFor="Email"/> Email
      <input required type="email" id="Email"/>
      <button>Sign up</button>
</form>
      
    </main>
  )
}

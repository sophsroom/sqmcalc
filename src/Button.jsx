export default function Button(props) {
    function handleClick(event) {
        console.log("Button was clicked!");
        alert("Button was clicked!");
    }
    return <button onClick={handleClick}>Click me</button>;
}

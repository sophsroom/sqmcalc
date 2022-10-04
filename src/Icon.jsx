const Icon = (props) => {
  const filename = `${props.name}.png`;  
  return <img className="icon"
              src={filename}
              alt={props.name}
         />;
}
export default Icon;
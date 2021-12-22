import './Flexbox.css'
const Flexbox = (props) =>{
  const content = props.children;
  return (
    <div className="flex_container">
      {content}
    </div>
  );
}

export default Flexbox;
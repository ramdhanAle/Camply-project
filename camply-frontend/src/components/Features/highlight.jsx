function Highlight(props) {
  return (
    <div>
      <p className="icon">{props.icon}</p>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  )
}

export default Highlight;
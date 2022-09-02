function Card(props) {
  return (
    <li className="card flex-47 flex">
      <div className="img-box flex-40">
        <img src={props.img} alt="food" />
      </div>
      <div className="flex-60">
        <div className="flex">
          <h2>{props.title}</h2>
          <strong>${props.price}</strong>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </li>
  );
}

export default Card;

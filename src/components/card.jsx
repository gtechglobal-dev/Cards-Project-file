export default function Cards(props) {
  return (
    <div className="card-group">
      <img src={props.img} alt="praying church" className="picture" />
      <hr />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="../src/assets/phone=logo.png" alt="phone-icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../src/assets/email-logo.png" alt="email-icon" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

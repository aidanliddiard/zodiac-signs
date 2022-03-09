import './Sign.css';

export default function Sign(props) {
  return (
    <div className="container">
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`} />
      <h2>{props.name}</h2>
      <p>{props.dates}</p>
    </div>
  );
}

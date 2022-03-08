import './Sign.css';

export default function Sign(props) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`} />
      <span>{props.name}</span>
      <p>{props.dates}</p>
    </div>
  );
}

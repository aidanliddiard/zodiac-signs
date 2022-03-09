import Sign from '../Sign/Sign';
import './Main.css';
import background from '../../background.jpg';

import { zodiac } from '../../data';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background}` }}>
      {zodiac.map((sign) => (
        <Sign key={sign.name} name={sign.name} dates={sign.dates} />
      ))}
    </main>
  );
}

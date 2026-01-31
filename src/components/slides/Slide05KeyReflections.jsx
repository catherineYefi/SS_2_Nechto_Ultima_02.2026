import { AlertTriangle } from 'lucide-react';

export default function Slide05KeyReflections() {
  return (
    <div className="slide text-plus-30">
      <h2>4 ключевые рефлексии</h2>
      
      <ul className="insight-list">
        <li className="insight-item">
          <AlertTriangle className="icon warning" />
          <span className="text">Формат воспринимался как групповое трекерство, а не отдельный режим</span>
        </li>
        <li className="insight-item">
          <AlertTriangle className="icon warning" />
          <span className="text">Не хватало "движа", ритма и ощущения элитарности</span>
        </li>
        <li className="insight-item">
          <AlertTriangle className="icon warning" />
          <span className="text">Weekly-ритм перегружал и участников, и трекеров</span>
        </li>
        <li className="insight-item">
          <AlertTriangle className="icon warning" />
          <span className="text">Фокус был на продажах и админ-формате, но не на удержании команды трекеров</span>
        </li>
      </ul>
      
      <div className="note">
        <p>Трекеры перегружались weekly-ритмом → выгорание снижало качество ведения групп</p>
      </div>
    </div>
  );
}

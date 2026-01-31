import { AlertTriangle } from 'lucide-react';

export default function Slide05KeyReflections() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>4 ключевые рефлексии</h2>
      
      <ul className="insight-list" style={{marginTop: '1.5rem'}}>
        <li className="insight-item" style={{marginBottom: '0.8rem', padding: '0.8rem'}}>
          <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Формат воспринимался как групповое трекерство, а не отдельный режим</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.8rem', padding: '0.8rem'}}>
          <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Не хватало "движа", ритма и ощущения элитарности</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.8rem', padding: '0.8rem'}}>
          <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Weekly-ритм перегружал и участников, и трекеров</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.8rem', padding: '0.8rem'}}>
          <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Фокус был на продажах и админ-формате, но не на удержании команды трекеров</span>
        </li>
      </ul>
      
      <div className="note" style={{marginTop: '1.5rem'}}>
        <p style={{fontSize: '1.1rem'}}>Трекеры перегружались weekly-ритмом → выгорание снижало качество ведения групп</p>
      </div>
    </div>
  );
}

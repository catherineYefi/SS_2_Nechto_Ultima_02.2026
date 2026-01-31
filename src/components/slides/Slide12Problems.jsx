import { XCircle, Lightbulb } from 'lucide-react';

export default function Slide12Problems() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1.2rem'}}>Почему прошлая модель Ультимы не работала</h2>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Проблемы позиционирования</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Воспринималась как групповое трекерство</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Движение "от встречи к встрече"</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Не было постоянного движа</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Отсутствовало ощущение элитарности</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Проблемы формата</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Weekly-ритм приводил к усталости</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Слабая групповая идентичность</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <XCircle className="icon error" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Не было фокуса на удержании трекеров</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Вывод:</strong> Ультима ощущалась как сервис, а не элитное сообщество</p>
      </div>
    </div>
  );
}

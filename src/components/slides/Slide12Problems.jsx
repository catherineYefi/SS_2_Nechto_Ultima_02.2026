import { XCircle, Lightbulb } from 'lucide-react';

export default function Slide12Problems() {
  return (
    <div className="slide">
      <h2>Почему прошлая модель Ультимы не работала</h2>
      
      <div className="two-column">
        <div>
          <h3>Проблемы позиционирования</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Воспринималась как групповое трекерство</span>
            </li>
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Движение "от встречи к встрече"</span>
            </li>
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Не было постоянного движа и событий</span>
            </li>
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Отсутствовало ощущение элитарности</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Проблемы формата</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Weekly-ритм приводил к усталости</span>
            </li>
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Слабая групповая идентичность</span>
            </li>
            <li className="insight-item">
              <XCircle className="icon error" />
              <span className="text">Не было фокуса на удержании команды трекеров</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Вывод:</strong> Ультима ощущалась как сервис, а не как элитное сообщество внутри Нечто</p>
      </div>
    </div>
  );
}

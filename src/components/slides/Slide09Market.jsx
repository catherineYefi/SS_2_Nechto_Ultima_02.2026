import { Lightbulb, AlertTriangle } from 'lucide-react';

export default function Slide09Market() {
  return (
    <div className="slide">
      <h2>Рынок: что происходит сейчас</h2>
      
      <div>
        <h3>Рынок сместился от "знать" к "делать"</h3>
        <ul className="insight-list compact">
          <li className="insight-item">
            <span className="text">Рынок перегрет контентом и сообществами</span>
          </li>
          <li className="insight-item">
            <span className="text">Предприниматели устали от форматов без внедрения</span>
          </li>
          <li className="insight-item">
            <span className="text">Растет запрос на: подготовку, сопровождение, ответственность за результат</span>
          </li>
          <li className="insight-item">
            <span className="text">Высокий страх сложных управленческих инструментов</span>
          </li>
        </ul>
      </div>
      
      <div className="note">
        <AlertTriangle className="inline-icon" style={{color: '#f59e0b'}} />
        <p>
          <strong>Сложность входа в рынок:</strong><br/>
          • Объем трафика категории ААА: дорогой и конкурентный<br/>
          • Донесение смыслов: как объяснить ценность СС<br/>
          • Взращивание амбассадоров бренда — требует времени
        </p>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Вывод:</strong> Побеждают те, кто доводит до решения</p>
      </div>
    </div>
  );
}

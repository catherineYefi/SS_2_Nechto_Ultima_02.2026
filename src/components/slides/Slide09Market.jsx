import { Lightbulb, AlertTriangle } from 'lucide-react';

export default function Slide09Market() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Рынок: что происходит сейчас</h2>
      
      <div>
        <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>Рынок сместился от "знать" к "делать"</h3>
        <ul className="insight-list compact" style={{marginTop: '1rem'}}>
          <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Рынок перегрет контентом и сообществами</span>
          </li>
          <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Предприниматели устали от форматов без внедрения</span>
          </li>
          <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Растет запрос на: подготовку, сопровождение, ответственность за результат</span>
          </li>
          <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Высокий страх сложных управленческих инструментов</span>
          </li>
        </ul>
      </div>
      
      <div className="note" style={{marginTop: '1rem', fontSize: '1rem'}}>
        <AlertTriangle className="inline-icon" style={{color: '#f59e0b'}} />
        <p style={{fontSize: '1.1rem'}}>
          <strong>Сложность входа:</strong> дорогой и конкурентный объем трафика ААА • сложное донесение смыслов • долгое выращивание амбассадоров
        </p>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Вывод:</strong> Побеждают те, кто доводит до решения</p>
      </div>
    </div>
  );
}

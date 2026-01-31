import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide16BI() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Контур БИ как фундамент качества</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Подготовка как стандарт, а не опция</p>
      
      <div className="feature-box" style={{padding: '1rem', margin: '1rem 0'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>3 групповые встречи по 1,5 часа до СС</h3>
        <ul className="insight-list compact">
          <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Входят в стоимость трекинга</span>
          </li>
          <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Работа с цифрами и управленческими инструментами</span>
          </li>
          <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Снижение тревожности участников</span>
          </li>
          <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Повышение качества решений на СС</span>
          </li>
        </ul>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Результат:</strong> Участники на СС подготовлены → решения глубже, внедрения быстрее</p>
      </div>
    </div>
  );
}

import { CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide16BI() {
  return (
    <div className="slide">
      <h2>Контур БИ как фундамент качества</h2>
      <p className="section-subtitle">Подготовка как стандарт, а не опция</p>
      
      <div className="feature-box">
        <h3>3 групповые встречи по 1,5 часа до СС</h3>
        <ul className="insight-list compact">
          <li className="insight-item">
            <CheckCircle className="icon success" />
            <span className="text">Входят в стоимость трекинга</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon success" />
            <span className="text">Работа с цифрами и управленческими инструментами</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon success" />
            <span className="text">Снижение тревожности участников</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon success" />
            <span className="text">Повышение качества решений на СС</span>
          </li>
        </ul>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Результат:</strong> Участники приходят на СС подготовленными → решения глубже, внедрения быстрее</p>
      </div>
    </div>
  );
}

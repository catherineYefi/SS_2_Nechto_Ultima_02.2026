import { CheckCircle } from 'lucide-react';

export default function Slide04KeyInsights() {
  return (
    <div className="slide">
      <h2>3 ключевых вывода</h2>
      
      <ul className="insight-list">
        <li className="insight-item">
          <CheckCircle className="icon success" />
          <span className="text">Формат Ультимы ценен рынку и участникам</span>
        </li>
        <li className="insight-item">
          <CheckCircle className="icon success" />
          <span className="text">Стратегические сессии дают максимальную глубину решений и план на сезон</span>
        </li>
        <li className="insight-item">
          <CheckCircle className="icon success" />
          <span className="text">Качество результата сильно зависит от подготовки участников и групповой динамики с удержанием фокуса</span>
        </li>
      </ul>
    </div>
  );
}

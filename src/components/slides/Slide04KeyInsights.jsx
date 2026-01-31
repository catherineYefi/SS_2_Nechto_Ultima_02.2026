import { CheckCircle } from 'lucide-react';

export default function Slide04KeyInsights() {
  const insights = [
    'Формат Ультимы ценен рынку и участникам',
    'Стратегические сессии дают максимальную глубину решений и план на сезон',
    'Качество результата сильно зависит от подготовки участников и групповой динамики с удержанием фокуса',
  ];

  return (
    <div className="slide">
      <h2>3 ключевых вывода</h2>

      <div className="pillars-grid">
        {insights.map((text) => (
          <div key={text} className="pillar-card">
            <CheckCircle className="pillar-icon icon success" />
            <div className="pillar-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

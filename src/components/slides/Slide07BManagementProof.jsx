import { BarChart3, CheckCircle, TrendingUp } from 'lucide-react';

export default function Slide07BManagementProof() {
  const keyResults = [
    'Средний чек вырос с 195к до 422к (×2,2)',
    'Выручка удержана на уровне 18,5 млн ₽',
    'Продукт стал управляемым и автономным',
  ];

  const builtFromScratch = [
    'Полная автономность: продукт, операционка, контент',
    'Инструменты давления на результат: калькуляторы, дашборд, портал',
    'Ребрендинг своими силами: логотип, стили, презентации (~800к)',
    'Системный результат: Ultima как автономный юнит',
  ];

  return (
    <div className="slide">
      <h2>Ключевой управленческий результат</h2>

      <div className="evidence-metrics">
        {keyResults.map((t, i) => (
          <div key={t} className="metric-card evidence-metric-card">
            <div className="evidence-metric-icon">
              {i === 0 ? (
                <TrendingUp className="icon accent" />
              ) : i === 1 ? (
                <BarChart3 className="icon accent" />
              ) : (
                <CheckCircle className="icon success" />
              )}
            </div>

            <div className="evidence-metric-text">{t}</div>
          </div>
        ))}
      </div>

      <section className="evidence-wall">
        <h3 className="evidence-title">Что создано с нуля</h3>

        <div className="chips-grid">
          {builtFromScratch.map((t) => (
            <div key={t} className="chip">
              <CheckCircle className="chip-icon icon success" />
              <div className="chip-text">{t}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

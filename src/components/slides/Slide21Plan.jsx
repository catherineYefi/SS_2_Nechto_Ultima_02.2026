import { DollarSign, TrendingUp } from 'lucide-react';

export default function Slide21Plan() {
  const revenue = [
    { title: 'Ультима', value: '50 млн ₽', note: '72 × 700k' },
    { title: 'СС для компаний', value: '9 млн ₽', note: '15 × 600k (в тестировании)' },
    { title: 'СС для десяток', value: '8 млн ₽', note: '10 × 800k' },
    { title: 'Индивид. трекерство', value: '1,35 млн ₽', note: '' },
  ];

  const scenarios = [
    { label: 'Минимум', text: '50 млн с R 15-17%' },
    { label: 'Оптимум', text: '60 млн с R 16-18%' },
    { label: 'Амбиция', text: '70 млн с R 19-21%' },
  ];

  return (
    <div className="slide slide-21">
      <h2>План 2026 и выручка</h2>
      <p className="section-subtitle section-subtitle--hero">Сценарии</p>

      <div className="plan-grid plan-grid--tight">
        {revenue.map((r) => (
          <div key={r.title} className="plan-card">
            <div className="plan-card-head">
              <DollarSign className="inline-icon icon accent" />
              <h3 className="plan-card-title">{r.title}</h3>
            </div>

            <div className="plan-card-value">{r.value}</div>
            {r.note ? <div className="plan-card-note">{r.note}</div> : null}
          </div>
        ))}
      </div>

      <div className="scenarios-row">
        <TrendingUp className="inline-icon icon success" />
        <div className="scenarios-title">Итого:</div>

        <div className="scenarios-chips">
          {scenarios.map((s) => (
            <div key={s.label} className="scenario-chip">
              <span className="scenario-chip-label">{s.label}:</span>
              <span className="scenario-chip-text">{s.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="conclusion full-width plan-metrics">
        <h3 className="metrics-title">Ключевые метрики:</h3>
        <p className="metrics-line">
          • Выручка и прибыль • Retention 95%+ • Ядро участников • Команда трекеров 100%
        </p>
      </div>
    </div>
  );
}

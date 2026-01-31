import { TrendingUp, DollarSign, Award } from 'lucide-react';

export default function Slide22Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Усиление продукта',
      items: ['Трекеры усиливают эфиры и домашки базового Нечто', 'Экспертиза и помощь команде'],
      accent: false,
    },
    {
      icon: DollarSign,
      title: 'Рост экономики',
      items: ['Рост LTV (жизненный цикл)', 'Рост AOV (средний чек)', 'Рост выручки и прибыли'],
      accent: true,
    },
    {
      icon: Award,
      title: 'Удержание и репутация',
      items: ['Удержание сильных участников', 'Кейсы и доказательства', 'Бренд элитного сообщества'],
      accent: false,
    },
  ];

  return (
    <div className="slide">
      <h2>Что Нечто получает с Ультимой</h2>

      <div className="benefits-grid benefits-grid--tight">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <section
              key={b.title}
              className={`benefit-card ${b.accent ? 'benefit-card--accent' : ''}`}
            >
              <div className="benefit-head">
                <Icon className="benefit-icon icon accent" />
                <h3 className="benefit-title">{b.title}</h3>
              </div>

              <ul className="benefit-list">
                {b.items.map((t) => (
                  <li key={t} className="benefit-item">
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

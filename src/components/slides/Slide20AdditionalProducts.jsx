import { TestTube, Beaker, Lightbulb } from 'lucide-react';

export default function Slide20AdditionalProducts() {
  const testing = [
    'СС для тру-десяток: 80k/участник → 800k/десятка',
    'СС для компаний: 400-600k',
    'Индивидуальное трекерство: точечные запросы',
  ];

  const building = [
    'Апсейлы внутри года: СС через 3 месяца',
    'Пакеты "Ультима + СС" для собственников 100+ млн',
  ];

  return (
    <div className="slide">
      <h2>Дополнительные продукты</h2>
      <p className="section-subtitle section-subtitle--hero">СС как отдельный рычаг роста</p>

      <div className="products-grid products-grid--tight">
        <section className="products-block">
          <h3 className="products-title">В тестировании:</h3>
          <ul className="products-list">
            {testing.map((t) => (
              <li key={t} className="products-item">
                <TestTube className="inline-icon icon accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="products-block products-block--accent">
          <h3 className="products-title">В разработке:</h3>
          <ul className="products-list">
            {building.map((t) => (
              <li key={t} className="products-item">
                <Beaker className="inline-icon icon warning" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Логика:</strong> Вход → Ультима/СС → допродажа внутри года
        </p>
      </div>
    </div>
  );
}

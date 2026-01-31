import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function Slide23Price() {
  const left = [
    'Отток зрелых предпринимателей',
    'Отток трекеров из экосистемы',
    'Потолок роста на ЦА ААА',
  ];

  const right = [
    'Снижение LTV и среднего чека',
    'Слабее кейсовая база',
    'Риск остаться "soft" без результатов',
  ];

  return (
    <div className="slide">
      <h2>Цена отсутствия Ультимы</h2>
      <p className="section-subtitle section-subtitle--hero">Что теряет Нечто без Ультимы</p>

      <div className="price-grid price-grid--tight">
        <section className="price-block">
          <ul className="price-list">
            {left.map((t) => (
              <li key={t} className="price-item">
                <AlertTriangle className="inline-icon icon warning" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="price-block price-block--accent">
          <ul className="price-list">
            {right.map((t) => (
              <li key={t} className="price-item">
                <AlertTriangle className="inline-icon icon warning" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Вывод:</strong> Ультима — это инфраструктура роста всей экосистемы
        </p>
      </div>
    </div>
  );
}

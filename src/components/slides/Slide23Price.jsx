import { Lightbulb } from 'lucide-react';

export default function Slide23Price() {
  const items = [
    'Отток зрелых предпринимателей в другие сообщества',
    'Отток трекеров как доп. усиления экосистемы',
    'Потолок роста: невозможность двигать ЦА ААА вверх по траектории',
    'Снижение LTV, среднего чека, доп. выручки и прибыли',
    'Слабее кейсовая база для продвижения',
    'Риск остаться "soft-сообществом" без твёрдых результатов',
  ];

  return (
    <div className="slide slide-23">
      <h2>Цена отсутствия Ультимы</h2>
      <p className="section-subtitle section-subtitle--hero">Что теряет Нечто без Ультимы</p>

      <div className="price-cards">
        {items.map((t) => (
          <div key={t} className="price-card">
            <div className="price-card-dot" aria-hidden="true" />
            <div className="price-card-text">{t}</div>
          </div>
        ))}
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight conclusion--inline">
        <Lightbulb className="conclusion-icon conclusion-icon--inline" />
        <p className="conclusion-text-inline">
          <strong>Вывод:</strong> Ультима — это не просто продукт. Это инфраструктура роста всей экосистемы.
        </p>
      </div>
    </div>
  );
}

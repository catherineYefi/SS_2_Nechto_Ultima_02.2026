import { AlertTriangle, Lightbulb } from 'lucide-react';

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

      <div className="price-one">
        <ul className="price-one-list">
          {items.map((t) => (
            <li key={t} className="price-one-item">
              <AlertTriangle className="inline-icon icon warning" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight">
        <div className="conclusion-line">
          <strong>Вывод:</strong>
        </div>
        <div className="conclusion-line">
          Ультима — это не просто продукт. Это инфраструктура роста всей экосистемы.
        </div>
      </div>
    </div>
  );
}

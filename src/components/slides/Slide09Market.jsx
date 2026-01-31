import { Lightbulb } from 'lucide-react';

export default function Slide09Market() {
  const signals = [
    'Рынок перегрет контентом и сообществами',
    'Предприниматели устали от форматов без внедрения',
    'Растет запрос на: подготовку, сопровождение, ответственность за результат',
    'Высокий страх сложных управленческих инструментов',
  ];

  const entryComplexity = [
    'дорогой и конкурентный объем трафика ААА',
    'сложное донесение смыслов',
    'долгое выращивание амбассадоров',
  ];

  return (
    <div className="slide">
      <h2>Рынок: что происходит сейчас</h2>

      <div className="market-axis">Рынок сместился от &quot;знать&quot; к &quot;делать&quot;</div>

      <div className="market-grid">
        <section className="market-block">
          <h3 className="market-title">Сигналы рынка</h3>
          <ul className="market-list">
            {signals.map((t) => (
              <li key={t} className="market-item">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="market-block market-block--accent">
          <h3 className="market-title">Сложность входа</h3>
          <ul className="market-list">
            {entryComplexity.map((t) => (
              <li key={t} className="market-item">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact">
        <Lightbulb className="conclusion-icon" />
        <p>
          <strong>Вывод:</strong> Побеждают те, кто доводит до решения
        </p>
      </div>
    </div>
  );
}

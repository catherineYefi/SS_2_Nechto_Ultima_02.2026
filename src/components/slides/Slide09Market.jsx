import { Lightbulb } from 'lucide-react';

export default function Slide09Market() {
  const signals = [
    'Рынок перегрет контентом и сообществами',
    'Предприниматели устали от форматов без внедрения',
    'Растет запрос на: подготовку, сопровождение, ответственность за результат',
    'Высокий страх сложных управленческих инструментов',
  ];

  const entryComplexity = [
    'Дорогой и конкурентный объем трафика ААА',
    'Сложное донесение смыслов',
    'Долгое выращивание амбассадоров',
  ];

  return (
    <div className="slide">
      <h2>Рынок: что происходит сейчас</h2>

      <div className="market-axis">Рынок сместился от &quot;знать&quot; к &quot;делать&quot;</div>

      <div className="market-grid market-grid--tight">
        <section className="market-block market-block--tight">
          <h3 className="market-title market-title--tight">Сигналы рынка</h3>
          <ul className="market-list market-list--tight">
            {signals.map((t) => (
              <li key={t} className="market-item market-item--tight">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section className="market-block market-block--accent market-block--tight">
          <h3 className="market-title market-title--tight">Сложность входа</h3>
          <ul className="market-list market-list--tight">
            {entryComplexity.map((t) => (
              <li key={t} className="market-item market-item--tight">
                {t}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="conclusion full-width conclusion--compact conclusion--tight">
        <Lightbulb className="conclusion-icon" />
        <p>
          <strong>Вывод:</strong> Побеждают те, кто доводит до решения
        </p>
      </div>
    </div>
  );
}
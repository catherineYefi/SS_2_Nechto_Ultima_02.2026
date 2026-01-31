import { Target } from 'lucide-react';

export default function Slide07FocusFuture() {
  const items = [
    'Укрепить статус Ультимы как элитного сообщества внутри Нечто',
    'Сделать Ультиму желаемой и ограниченной: хотят все, попадают не все',
    'Выполнение плана продаж и целевой R, поиск связки (лиды - КЭВ - конвертор)',
  ];

  return (
    <div className="slide">
      <h2>3 фокуса на будущее</h2>

      <div className="pillars-grid">
        {items.map((text) => (
          <div key={text} className="pillar-card">
            <Target className="pillar-icon icon accent" />
            <div className="pillar-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

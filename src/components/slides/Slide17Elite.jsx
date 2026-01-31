import { Target, Sparkles } from 'lucide-react';

export default function Slide17Elite() {
  const levers = [
    'Мастермайнды — 3 раза в год (только для Ультимы)',
    'Слёты — как якорные события',
    'Доп. эфиры экспертов — расширение прикосновений',
    'Плотный коннект трекер ↔ лидер еженедельно',
    'Отдельный ритм, недоступный в базовом Нечто',
  ];

  return (
    <div className="slide">
      <h2>Элитарность и &quot;движ&quot; Ультимы</h2>
      <p className="section-subtitle section-subtitle--hero">То, чего не хватало раньше</p>

      <div className="elite-grid">
        {levers.map((t) => (
          <div key={t} className="elite-item">
            <Target className="inline-icon icon accent" />
            <span>{t}</span>
          </div>
        ))}
      </div>

      <div className="big-quote big-quote--tight">
        <Sparkles className="inline-icon" />
        <p>Элитарность — это плотность внимания и качества</p>
      </div>
    </div>
  );
}

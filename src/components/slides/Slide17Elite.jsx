import { Target, Sparkles } from 'lucide-react';

export default function Slide17Elite() {
  return (
    <div className="slide">
      <h2>Элитарность и "движ" Ультимы</h2>
      <p className="section-subtitle">То, чего не хватало раньше</p>
      
      <ul className="insight-list">
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Мастермайнды — 3 раза в год (только для участников Ультимы)</span>
        </li>
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Слёты — как якорные события</span>
        </li>
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Доп. эфиры экспертов — расширение прикосновений</span>
        </li>
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Плотный коннект трекер ↔ лидер каждую неделю персонально</span>
        </li>
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Отдельный ритм и события, недоступные в базовом Нечто</span>
        </li>
      </ul>
      
      <div className="big-quote">
        <Sparkles className="inline-icon" />
        <p>Элитарность — это плотность внимания и качества</p>
      </div>
    </div>
  );
}

import { Target, Sparkles } from 'lucide-react';

export default function Slide17Elite() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Элитарность и "движ" Ультимы</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>То, чего не хватало раньше</p>
      
      <ul className="insight-list" style={{marginTop: '1rem'}}>
        <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Мастермайнды — 3 раза в год (только для Ультимы)</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Слёты — как якорные события</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Доп. эфиры экспертов — расширение прикосновений</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Плотный коннект трекер ↔ лидер еженедельно</span>
        </li>
        <li className="insight-item" style={{marginBottom: '0.6rem', padding: '0.6rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Отдельный ритм, недоступный в базовом Нечто</span>
        </li>
      </ul>
      
      <div className="big-quote" style={{marginTop: '1rem', fontSize: '1.6rem'}}>
        <Sparkles className="inline-icon" />
        <p>Элитарность — это плотность внимания и качества</p>
      </div>
    </div>
  );
}

import { Target, CheckCircle } from 'lucide-react';

export default function Slide24Fixations() {
  return (
    <div className="slide text-plus-20">
      <h2>Фиксации на 9 сезон</h2>
      
      <div className="big-quote highlight">
        <p>Ультима = элитное сообщество внутри Нечто</p>
      </div>
      
      <ul className="insight-list">
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Ультима — вершина траектории роста участника в экосистеме</span>
        </li>
        <li className="insight-item">
          <Target className="icon" />
          <span className="text">Поддержка стандартов элитности: вход, ритм, плотность внимания, ресурсы</span>
        </li>
      </ul>
      
      <div className="conclusion">
        <h3>Главные метрики успеха:</h3>
        <p style={{fontSize: '1.6rem', marginTop: '1rem'}}>
          • Выполнение плана выручки<br/>
          • Retention 95%+
        </p>
      </div>
    </div>
  );
}

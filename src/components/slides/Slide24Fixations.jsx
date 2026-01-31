import { Target, CheckCircle } from 'lucide-react';

export default function Slide24Fixations() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>Фиксации на 9 сезон</h2>
      
      <div className="big-quote highlight" style={{fontSize: '2.5rem', margin: '1.5rem 0'}}>
        <p>Ультима = элитное сообщество</p>
      </div>
      
      <ul className="insight-list" style={{marginTop: '1.5rem'}}>
        <li className="insight-item" style={{padding: '0.7rem', marginBottom: '0.8rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Вершина траектории роста в экосистеме</span>
        </li>
        <li className="insight-item" style={{padding: '0.7rem'}}>
          <Target className="icon" style={{width: '1.8rem', height: '1.8rem'}} />
          <span className="text" style={{fontSize: '1.2rem'}}>Стандарты: вход, ритм, плотность, ресурсы</span>
        </li>
      </ul>
      
      <div className="conclusion" style={{marginTop: '1.5rem'}}>
        <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>Метрики успеха:</h3>
        <p style={{fontSize: '1.3rem', marginTop: '0.5rem'}}>
          • Выполнение плана • Retention 95%+
        </p>
      </div>
    </div>
  );
}

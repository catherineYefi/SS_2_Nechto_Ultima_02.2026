import { TrendingUp, DollarSign, Award } from 'lucide-react';

export default function Slide22Benefits() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>Что Нечто получает с Ультимой</h2>
      
      <div className="benefits-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1rem 0'}}>
        <div className="benefit-box" style={{padding: '1rem'}}>
          <TrendingUp className="inline-icon" style={{width: '2.2rem', height: '2.2rem'}} />
          <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Усиление продукта</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Трекеры усиливают эфиры и домашки базового Нечто</span>
            </li>
            <li className="insight-item" style={{padding: '0.4rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Экспертиза и помощь команде</span>
            </li>
          </ul>
        </div>
        
        <div className="benefit-box" style={{padding: '1rem'}}>
          <DollarSign className="inline-icon" style={{width: '2.2rem', height: '2.2rem'}} />
          <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Рост экономики</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Рост LTV (жизненный цикл)</span>
            </li>
            <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Рост AOV (средний чек)</span>
            </li>
            <li className="insight-item" style={{padding: '0.4rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Рост выручки и прибыли</span>
            </li>
          </ul>
        </div>
        
        <div className="benefit-box" style={{padding: '1rem'}}>
          <Award className="inline-icon" style={{width: '2.2rem', height: '2.2rem'}} />
          <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Удержание и репутация</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Удержание сильных участников</span>
            </li>
            <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Кейсы и доказательства</span>
            </li>
            <li className="insight-item" style={{padding: '0.4rem'}}>
              <span className="text" style={{fontSize: '1rem'}}>Бренд элитного сообщества</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

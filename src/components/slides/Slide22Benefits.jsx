import { TrendingUp, DollarSign, Award } from 'lucide-react';

export default function Slide22Benefits() {
  return (
    <div className="slide">
      <h2>Что Нечто получает с Ультимой</h2>
      
      <div className="benefits-grid">
        <div className="benefit-box">
          <TrendingUp className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Усиление основного продукта</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Трекеры усиливают эфиры, домашки, разборы в базовом Нечто</span>
            </li>
            <li className="insight-item">
              <span className="text">Экспертиза, время, помощь команде Нечто</span>
            </li>
          </ul>
        </div>
        
        <div className="benefit-box">
          <DollarSign className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Рост экономики</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Рост LTV (жизненный цикл клиента)</span>
            </li>
            <li className="insight-item">
              <span className="text">Рост AOV (средний чек)</span>
            </li>
            <li className="insight-item">
              <span className="text">Рост доп. выручки и прибыли</span>
            </li>
          </ul>
        </div>
        
        <div className="benefit-box">
          <Award className="inline-icon" style={{width: '3rem', height: '3rem'}} />
          <h3>Удержание и репутация</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Удержание сильных участников в экосистеме</span>
            </li>
            <li className="insight-item">
              <span className="text">Кейсы и доказательства результатов</span>
            </li>
            <li className="insight-item">
              <span className="text">Бренд элитного сообщества с доказанным результатом</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

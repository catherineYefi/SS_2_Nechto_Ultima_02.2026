import { DollarSign, TrendingUp } from 'lucide-react';

export default function Slide21Plan() {
  return (
    <div className="slide">
      <h2>План 2026 и выручка</h2>
      <p className="section-subtitle">Сценарии</p>
      
      <div className="revenue-breakdown">
        <div className="revenue-item">
          <DollarSign className="inline-icon" />
          <h3>Ультима</h3>
          <div className="metric-value">50 млн ₽</div>
          <p>72 × 700k</p>
        </div>
        
        <div className="revenue-item">
          <DollarSign className="inline-icon" />
          <h3>СС для компаний</h3>
          <div className="metric-value">9 млн ₽</div>
          <p>15 × 600k<br/><em>(низкая уверенность, в стадии тестирования)</em></p>
        </div>
        
        <div className="revenue-item">
          <DollarSign className="inline-icon" />
          <h3>СС для тру-десяток</h3>
          <div className="metric-value">8 млн ₽</div>
          <p>10 × 800k</p>
        </div>
        
        <div className="revenue-item">
          <DollarSign className="inline-icon" />
          <h3>Индивидуальное трекерство</h3>
          <div className="metric-value">1,35 млн ₽</div>
        </div>
      </div>
      
      <div className="total-revenue">
        <TrendingUp className="inline-icon" />
        <h3>Итого:</h3>
        <ul className="insight-list compact">
          <li className="insight-item">
            <span className="text"><strong>Минимум:</strong> 50 млн с R 15-17%</span>
          </li>
          <li className="insight-item">
            <span className="text"><strong>Оптимум:</strong> 60 млн с R 16-18%</span>
          </li>
          <li className="insight-item">
            <span className="text"><strong>Амбиция:</strong> 70 млн с R 19-21%</span>
          </li>
        </ul>
      </div>
      
      <div className="conclusion">
        <h3>Ключевые метрики успеха 9 сезона:</h3>
        <p>
          • Выручка и прибыль: выполнение плана<br/>
          • Retention участников до финала: 95%+<br/>
          • Количество участников в ядре: удержание сильных участников<br/>
          • Удержание команды трекеров: 100%
        </p>
      </div>
    </div>
  );
}

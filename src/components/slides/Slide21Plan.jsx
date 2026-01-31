import { DollarSign, TrendingUp } from 'lucide-react';

export default function Slide21Plan() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>План 2026 и выручка</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Сценарии</p>
      
      <div className="revenue-breakdown" style={{margin: '1rem 0'}}>
        <div className="revenue-item" style={{marginBottom: '0.8rem'}}>
          <DollarSign className="inline-icon" />
          <h3 style={{fontSize: '1.5rem'}}>Ультима</h3>
          <div className="metric-value" style={{fontSize: '2rem'}}>50 млн ₽</div>
          <p style={{fontSize: '1rem'}}>72 × 700k</p>
        </div>
        
        <div className="revenue-item" style={{marginBottom: '0.8rem'}}>
          <DollarSign className="inline-icon" />
          <h3 style={{fontSize: '1.5rem'}}>СС для компаний</h3>
          <div className="metric-value" style={{fontSize: '2rem'}}>9 млн ₽</div>
          <p style={{fontSize: '1rem'}}>15 × 600k (в тестировании)</p>
        </div>
        
        <div className="revenue-item" style={{marginBottom: '0.8rem'}}>
          <DollarSign className="inline-icon" />
          <h3 style={{fontSize: '1.5rem'}}>СС для десяток</h3>
          <div className="metric-value" style={{fontSize: '2rem'}}>8 млн ₽</div>
          <p style={{fontSize: '1rem'}}>10 × 800k</p>
        </div>
        
        <div className="revenue-item">
          <DollarSign className="inline-icon" />
          <h3 style={{fontSize: '1.5rem'}}>Индивид. трекерство</h3>
          <div className="metric-value" style={{fontSize: '2rem'}}>1,35 млн ₽</div>
        </div>
      </div>
      
      <div className="total-revenue" style={{marginTop: '1rem'}}>
        <TrendingUp className="inline-icon" />
        <h3 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>Итого:</h3>
        <ul className="insight-list compact">
          <li className="insight-item" style={{padding: '0.4rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}><strong>Минимум:</strong> 50 млн с R 15-17%</span>
          </li>
          <li className="insight-item" style={{padding: '0.4rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}><strong>Оптимум:</strong> 60 млн с R 16-18%</span>
          </li>
          <li className="insight-item" style={{padding: '0.4rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}><strong>Амбиция:</strong> 70 млн с R 19-21%</span>
          </li>
        </ul>
      </div>
      
      <div className="conclusion" style={{marginTop: '1rem'}}>
        <h3 style={{fontSize: '1.4rem'}}>Ключевые метрики:</h3>
        <p style={{fontSize: '1.1rem', marginTop: '0.5rem'}}>
          • Выручка и прибыль • Retention 95%+ • Ядро участников • Команда трекеров 100%
        </p>
      </div>
    </div>
  );
}

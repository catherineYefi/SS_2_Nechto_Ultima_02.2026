import { TestTube, Beaker, Lightbulb } from 'lucide-react';

export default function Slide20AdditionalProducts() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Дополнительные продукты</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>СС как отдельный рычаг роста</p>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>В тестировании:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <TestTube className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>СС для тру-десяток: 80k/участник → 800k/десятка</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <TestTube className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>СС для компаний: 400-600k</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem'}}>
              <TestTube className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Индивидуальное трекерство: точечные запросы</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>В разработке:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <Beaker className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Апсейлы внутри года: СС через 3 месяца</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem'}}>
              <Beaker className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Пакеты "Ультима + СС" для собственников 100+ млн</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Логика:</strong> Вход → Ультима/СС → допродажа внутри года</p>
      </div>
    </div>
  );
}

import { AlertTriangle, Lightbulb } from 'lucide-react';

export default function Slide23Price() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Цена отсутствия Ультимы</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Что теряет Нечто без Ультимы</p>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Отток зрелых предпринимателей</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Отток трекеров из экосистемы</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Потолок роста на ЦА ААА</span>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Снижение LTV и среднего чека</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Слабее кейсовая база</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem'}}>
              <AlertTriangle className="icon warning" style={{width: '1.8rem', height: '1.8rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Риск остаться "soft" без результатов</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Вывод:</strong> Ультима — это инфраструктура роста всей экосистемы</p>
      </div>
    </div>
  );
}

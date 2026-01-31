import { CheckCircle, TestTube, Target, Lightbulb } from 'lucide-react';

export default function Slide19Converters() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Конвертеры Ультимы</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Как Ультима обеспечивает удержание и выручку</p>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>ДОКАЗАННЫЕ конвертеры:</h3>
          <ul className="insight-list compact" style={{marginBottom: '0.8rem'}}>
            <li className="insight-item" style={{padding: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Слёты Нечто: LCR 22% → SCR 32% → CR 7%</span>
            </li>
          </ul>
          
          <ul className="insight-list compact" style={{marginBottom: '0.8rem'}}>
            <li className="insight-item" style={{padding: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Кейсы участников</span>
            </li>
          </ul>
          
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>НОВЫЕ гипотезы:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.4rem'}}>
              <TestTube className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Эфиры экспертов</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem'}}>
              <TestTube className="icon" style={{width: '1.4rem', height: '1.4rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Эфиры трекеров</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.8rem'}}>Удержание:</h3>
          <div className="feature-box" style={{padding: '0.9rem'}}>
            <h4 style={{fontSize: '1.3rem', marginBottom: '0.5rem'}}><Target className="inline-icon" /> Мастермайнды — 3 раза в год</h4>
            <p style={{fontSize: '1rem', marginBottom: '0.5rem'}}>ТОЛЬКО для участников Ультимы</p>
            <ul className="insight-list compact" style={{marginTop: '0.5rem'}}>
              <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
                <span className="text" style={{fontSize: '1.1rem'}}>Движ и элитарность</span>
              </li>
              <li className="insight-item" style={{padding: '0.4rem', marginBottom: '0.3rem'}}>
                <span className="text" style={{fontSize: '1.1rem'}}>Групповая идентичность</span>
              </li>
              <li className="insight-item" style={{padding: '0.4rem'}}>
                <span className="text" style={{fontSize: '1.1rem'}}>Эксклюзивность</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Цикл:</strong> Слёт → Ультима → Мастермайнд → Кейс</p>
      </div>
    </div>
  );
}

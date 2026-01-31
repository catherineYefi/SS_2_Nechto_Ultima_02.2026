export default function Slide11Scale() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Масштаб возможностей</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1.2rem'}}>Масштаб — не массовость, а ценность</p>
      
      <div className="two-column" style={{gap: '1.5rem', margin: '1.2rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Целевая аудитория:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Предприниматели с действующим бизнесом</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Чистая прибыль от 1 млн ₽/мес</span>
            </li>
            <li className="insight-item" style={{padding: '0.6rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Готовые платить за результат</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Планы на 2026:</h3>
          <div className="metric-card" style={{padding: '1rem'}}>
            <div className="metric-value" style={{fontSize: '2.8rem'}}>72</div>
            <div className="metric-label" style={{fontSize: '1.1rem'}}>участника Ультимы</div>
            <div className="metric-context" style={{fontSize: '1rem'}}>Базовый план</div>
          </div>
          <div className="metric-card" style={{marginTop: '0.8rem', padding: '1rem'}}>
            <div className="metric-value" style={{fontSize: '2.8rem'}}>80+</div>
            <div className="metric-label" style={{fontSize: '1.1rem'}}>верхний коридор</div>
            <div className="metric-context" style={{fontSize: '1rem'}}>За счёт продлений и допродуктов</div>
          </div>
        </div>
      </div>
    </div>
  );
}

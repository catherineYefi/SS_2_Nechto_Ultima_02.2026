export default function Slide11Scale() {
  return (
    <div className="slide">
      <h2>Масштаб возможностей</h2>
      <p className="section-subtitle">Масштаб — не массовость, а ценность</p>
      
      <div className="two-column">
        <div>
          <h3>Целевая аудитория:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">Предприниматели с действующим бизнесом</span>
            </li>
            <li className="insight-item">
              <span className="text">Чистая прибыль от 1 млн ₽/мес</span>
            </li>
            <li className="insight-item">
              <span className="text">Готовые платить за результат и внедрение</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Планы на 2026:</h3>
          <div className="metric-card">
            <div className="metric-value">72</div>
            <div className="metric-label">участника Ультимы</div>
            <div className="metric-context">Базовый план</div>
          </div>
          <div className="metric-card" style={{marginTop: '1rem'}}>
            <div className="metric-value">80+</div>
            <div className="metric-label">верхний коридор</div>
            <div className="metric-context">за счёт продлений и доп. продуктов</div>
          </div>
        </div>
      </div>
    </div>
  );
}

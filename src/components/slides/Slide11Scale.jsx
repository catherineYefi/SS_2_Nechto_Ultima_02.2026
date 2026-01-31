export default function Slide11Scale() {
  return (
    <div className="slide">
      <h2>Масштаб возможностей</h2>

      <div className="axis-line">Масштаб — не массовость, а ценность</div>

      <div className="scale-grid">
        <section className="scale-block">
          <h3 className="scale-title">Целевая аудитория:</h3>

          <ul className="scale-list">
            <li className="scale-item">Предприниматели с действующим бизнесом</li>
            <li className="scale-item">Чистая прибыль от 1 млн ₽/мес</li>
            <li className="scale-item">Готовые платить за результат</li>
          </ul>
        </section>

        <section className="scale-block scale-block--accent">
          <h3 className="scale-title">Планы на 2026:</h3>

          <div className="metric-card scale-metric">
            <div className="metric-value">72</div>
            <div className="metric-label">участника Ультимы</div>
            <div className="metric-context">Базовый план</div>
          </div>

          <div className="metric-card scale-metric" style={{ marginTop: 'clamp(14px, 1.6vw, 20px)' }}>
            <div className="metric-value">80+</div>
            <div className="metric-label">верхний коридор</div>
            <div className="metric-context">За счёт продлений и допродуктов</div>
          </div>
        </section>
      </div>
    </div>
  );
}

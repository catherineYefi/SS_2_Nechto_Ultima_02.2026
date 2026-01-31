import { Lightbulb } from 'lucide-react';

export default function Slide08Transition() {
  return (
    <div className="slide">
      <h2>8 сезон → 9 сезон</h2>
      <p className="section-subtitle section-subtitle--hero">
        8 сезон — переход. 9 сезон — тест новой архитектуры
      </p>

      <div className="compare-grid">
        <section className="compare-column">
          <h3 className="compare-title">8 сезон</h3>
          <p className="compare-text">спринты / true hard / попытка переупаковки &quot;на ходу&quot;</p>
        </section>

        <section className="compare-column compare-column--accent">
          <h3 className="compare-title">9 сезон</h3>
          <p className="compare-text">Ультима как элитное сообщество с целостной системой внутри</p>
        </section>
      </div>

      <div className="conclusion conclusion--compact">
        <Lightbulb className="conclusion-icon" />
        <p>
          <strong>Фокус:</strong> не улучшение формата, а смена класса продукта
        </p>
      </div>
    </div>
  );
}

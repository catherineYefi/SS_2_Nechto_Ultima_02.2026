import { Lightbulb } from 'lucide-react';

export default function Slide08Transition() {
  return (
    <div className="slide">
      <h2>8 сезон → 9 сезон</h2>
      <p className="section-subtitle text-plus-30">8 сезон — переход. 9 сезон — тест новой архитектуры</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', margin: '3rem 0' }}>
        <div className="comparison-box">
          <h3>8 сезон</h3>
          <p>спринты / true hard / попытка переупаковки "на ходу"</p>
        </div>
        
        <div className="comparison-box highlight">
          <h3>9 сезон</h3>
          <p>Ультима как элитное сообщество с целостной системой внутри</p>
        </div>
      </div>
      
      <div className="conclusion">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Фокус:</strong> не улучшение формата, а смена класса продукта</p>
      </div>
    </div>
  );
}

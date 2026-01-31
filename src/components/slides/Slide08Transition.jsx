import { Lightbulb } from 'lucide-react';

export default function Slide08Transition() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>8 сезон → 9 сезон</h2>
      <p className="section-subtitle" style={{fontSize: '1.2rem', marginBottom: '1.5rem'}}>8 сезон — переход. 9 сезон — тест новой архитектуры</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '1.5rem 0' }}>
        <div className="comparison-box" style={{padding: '1.2rem'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>8 сезон</h3>
          <p style={{fontSize: '1.2rem'}}>спринты / true hard / попытка переупаковки "на ходу"</p>
        </div>
        
        <div className="comparison-box highlight" style={{padding: '1.2rem'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>9 сезон</h3>
          <p style={{fontSize: '1.2rem'}}>Ультима как элитное сообщество с целостной системой внутри</p>
        </div>
      </div>
      
      <div className="conclusion" style={{marginTop: '1.5rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Фокус:</strong> не улучшение формата, а смена класса продукта</p>
      </div>
    </div>
  );
}

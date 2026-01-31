import { Calendar, Zap, Clock } from 'lucide-react';

export default function Slide15NewRhythm() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Новый ритм работы</h2>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Ритм, который держит энергию и не выматывает</p>
      
      <div className="timeline" style={{gap: '0.8rem', margin: '1rem 0'}}>
        <div className="timeline-item" style={{padding: '0.9rem'}}>
          <Calendar className="inline-icon" />
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>Старт: первые 2 недели</h3>
          <p style={{fontSize: '1.1rem'}}>
            • Максимальный фокус команды • Плотное погружение • Быстрые реакции
          </p>
        </div>
        
        <div className="timeline-item" style={{padding: '0.9rem'}}>
          <Zap className="inline-icon" />
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>Первый месяц</h3>
          <p style={{fontSize: '1.1rem'}}>
            • Подготовка к СС: инструменты с эффектом WOW • Офлайн стратегическая сессия • Фиксация решений
          </p>
        </div>
        
        <div className="timeline-item" style={{padding: '0.9rem'}}>
          <Clock className="inline-icon" />
          <h3 style={{fontSize: '1.6rem', marginBottom: '0.5rem'}}>Основной ритм</h3>
          <p style={{fontSize: '1.1rem'}}>
            • Раз в 2 недели — встреча с трекером • Раз в 2 недели — встреча с лидером десятки • Чередование форматов
          </p>
        </div>
      </div>
    </div>
  );
}

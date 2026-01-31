import { Calendar, Zap, Clock } from 'lucide-react';

export default function Slide15NewRhythm() {
  return (
    <div className="slide">
      <h2>Новый ритм работы</h2>
      <p className="section-subtitle">Ритм, который держит энергию и не выматывает</p>
      
      <div className="timeline">
        <div className="timeline-item">
          <Calendar className="inline-icon" />
          <h3>Старт: первые 2 недели</h3>
          <p>
            • Максимальный фокус команды<br/>
            • Плотное погружение<br/>
            • Быстрые реакции
          </p>
        </div>
        
        <div className="timeline-item">
          <Zap className="inline-icon" />
          <h3>Первый месяц</h3>
          <p>
            • Подготовка к СС: доп. инструменты с эффектом WOW<br/>
            • Офлайн стратегическая сессия с трекером<br/>
            • Фиксация управленческих решений
          </p>
        </div>
        
        <div className="timeline-item">
          <Clock className="inline-icon" />
          <h3>Основной ритм</h3>
          <p>
            • Раз в 2 недели — встреча с трекером<br/>
            • Раз в 2 недели — встреча с лидером десятки<br/>
            • Чередование форматов для разнообразия
          </p>
        </div>
      </div>
    </div>
  );
}

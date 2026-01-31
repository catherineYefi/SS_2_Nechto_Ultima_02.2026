import { CheckCircle, Flask, Target, Lightbulb } from 'lucide-react';

export default function Slide19Converters() {
  return (
    <div className="slide">
      <h2>Конвертеры Ультимы</h2>
      <p className="section-subtitle">Как Ультима превращается в удержание и выручку</p>
      
      <div className="two-column">
        <div>
          <h3>ДОКАЗАННЫЕ конвертеры:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Слёты Нечто</span>
            </li>
          </ul>
          <ul className="insight-list compact" style={{marginLeft: '3rem', marginTop: '1rem'}}>
            <li className="insight-item">
              <span className="text"><strong>LCR</strong> — 22% участников → лиды Ультимы</span>
            </li>
            <li className="insight-item">
              <span className="text"><strong>SCR</strong> — 32% лидов → покупатели</span>
            </li>
            <li className="insight-item">
              <span className="text"><strong>CR</strong> — 7% сквозная конверсия (слёт → покупка)</span>
            </li>
          </ul>
          
          <ul className="insight-list compact" style={{marginTop: '2rem'}}>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Кейсы участников</span>
            </li>
          </ul>
          
          <h3 style={{marginTop: '2rem'}}>НОВЫЕ гипотезы на конвертацию:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <Flask className="icon" />
              <span className="text">Эфиры экспертов</span>
            </li>
            <li className="insight-item">
              <Flask className="icon" />
              <span className="text">Эфиры трекеров по домашкам</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Инструменты удержания и элитарности:</h3>
          <div className="feature-box">
            <h4><Target className="inline-icon" /> Мастермайнды — 3 раза в год</h4>
            <p>ТОЛЬКО для действующих участников Ультимы</p>
            <ul className="insight-list compact" style={{marginTop: '1rem'}}>
              <li className="insight-item">
                <span className="text">Создание движа и элитарности</span>
              </li>
              <li className="insight-item">
                <span className="text">Усиление групповой идентичности</span>
              </li>
              <li className="insight-item">
                <span className="text">Удержание через эксклюзивность</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="conclusion full-width text-plus-30">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Стратегия:</strong> "Слёт (конвертация) → Ультима → Мастермайнд (удержание) → Кейс (social proof)"</p>
      </div>
    </div>
  );
}

import { Users, CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide18Trackers() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1rem'}}>Команда трекеров — сердце Ультимы</h2>
      
      <div className="two-column" style={{gap: '1.2rem', margin: '1rem 0'}}>
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Ключевой актив:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>100+ компаний в опыте трекеров</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Обучены лично Дашкиевым и Калашниковым</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Действующие предприниматели с живыми бизнесами</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <span className="text" style={{fontSize: '1.1rem'}}>Насмотренность на типичные ошибки и золотые задачи</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 style={{fontSize: '1.8rem', marginBottom: '0.8rem'}}>Фокус на 9 сезон:</h3>
          <ul className="insight-list compact">
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Ритм без выгорания: раз в 2 недели</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Лидерская поддержка: плотный коннект еженедельно</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Инвестиции в удержание: мастермайнды, слёты</span>
            </li>
            <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
              <CheckCircle className="icon success" style={{width: '1.6rem', height: '1.6rem'}} />
              <span className="text" style={{fontSize: '1.1rem'}}>Командная динамика: синхронизации трекеров</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.2rem'}}><strong>Вывод:</strong> Сильная команда = качество продукта</p>
      </div>
    </div>
  );
}

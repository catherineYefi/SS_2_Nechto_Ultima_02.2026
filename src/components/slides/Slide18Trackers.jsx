import { Users, CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide18Trackers() {
  return (
    <div className="slide">
      <h2>Команда трекеров — сердце Ультимы</h2>
      
      <div className="two-column">
        <div>
          <h3>Почему трекеры — это наш ключевой актив:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <span className="text">100+ компаний в общей сложности в опыте трекеров</span>
            </li>
            <li className="insight-item">
              <span className="text">Обучены лично Дашкиевым и Калашниковым</span>
            </li>
            <li className="insight-item">
              <span className="text">Не просто консультанты — действующие предприниматели с живыми бизнесами</span>
            </li>
            <li className="insight-item">
              <span className="text">Высокая насмотренность на типичные ошибки и золотые задачи</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3>Фокус на 9 сезон:</h3>
          <ul className="insight-list compact">
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Ритм без выгорания: встречи раз в 2 недели</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Лидерская поддержка: плотный коннект трекер ↔ лидер каждую неделю</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Инвестиции в удержание: мастермайнды, слёты, доп. ресурсы</span>
            </li>
            <li className="insight-item">
              <CheckCircle className="icon success" />
              <span className="text">Командная динамика: регулярные синхронизации трекеров</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="conclusion full-width">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Вывод:</strong> Удержание сильной команды трекеров = удержание качества продукта</p>
      </div>
    </div>
  );
}

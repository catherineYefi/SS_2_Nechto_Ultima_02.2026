import { CheckCircle } from 'lucide-react';

export default function Slide07AManagement() {
  return (
    <div className="slide">
      <h1>8 сезон: управленческая перестройка</h1>
      <p className="section-subtitle">Как новая команда пересобрала продукт в движении</p>

      <div className="content-section">
        <h3>Контекст</h3>
        <p>В 8 сезоне новая команда взяла полное управление Ultima</p>
        <p>Пересборка продукта "на ходу", без паузы, без внешних ресурсов</p>
      </div>

      <div className="content-section">
        <h3>Ключевой управленческий результат</h3>
        <p><strong>Несмотря на сложности:</strong></p>
        <ul className="insight-list">
          <li className="insight-item">
            <span className="text">Средний чек вырос с 195к до 422к (×2,2)</span>
          </li>
          <li className="insight-item">
            <span className="text">Выручка удержана на уровне 18,5 млн ₽</span>
          </li>
          <li className="insight-item">
            <span className="text">Продукт стал управляемым и автономным</span>
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Что создано с нуля</h3>
        <ul className="insight-list">
          <li className="insight-item">
            <CheckCircle className="icon" />
            <span className="text">Полная автономность: продукт, операционка, контент</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon" />
            <span className="text">Инструменты давления на результат: калькуляторы, дашборд, методологический портал</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon" />
            <span className="text">Ребрендинг своими силами: логотип, стили, презентации (экономия ~800к)</span>
          </li>
          <li className="insight-item">
            <CheckCircle className="icon" />
            <span className="text">Системный результат: Ultima как автономный юнит внутри Нечто</span>
          </li>
        </ul>
      </div>

      <div className="conclusion full-width">
        <p><strong>8 сезон — не провал, а подготовка к смене класса продукта</strong></p>
      </div>
    </div>
  );
}

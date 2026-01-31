import { CheckCircle } from 'lucide-react';

export default function Slide07AManagement() {
  return (
    <div className="slide">
      <h1 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>8 сезон: управленческая перестройка</h1>
      <p className="section-subtitle" style={{fontSize: '1.1rem', marginBottom: '1rem'}}>Как новая команда пересобрала продукт в движении</p>

      <div className="content-section" style={{marginBottom: '1rem'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '0.6rem'}}>Контекст</h3>
        <p style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>В 8 сезоне новая команда взяла полное управление Ultima</p>
        <p style={{fontSize: '1.1rem', marginBottom: '0.4rem'}}>Пересборка продукта "на ходу", без паузы, без внешних ресурсов</p>
      </div>

      <div className="content-section" style={{marginBottom: '1rem'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '0.6rem'}}>Ключевой управленческий результат</h3>
        <p style={{fontSize: '1.1rem', marginBottom: '0.6rem'}}><strong>Несмотря на сложности:</strong></p>
        <ul className="insight-list" style={{marginTop: '0.8rem'}}>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Средний чек вырос с 195к до 422к (×2,2)</span>
          </li>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Выручка удержана на уровне 18,5 млн ₽</span>
          </li>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <span className="text" style={{fontSize: '1.1rem'}}>Продукт стал управляемым и автономным</span>
          </li>
        </ul>
      </div>

      <div className="content-section" style={{marginBottom: '1rem'}}>
        <h3 style={{fontSize: '1.8rem', marginBottom: '0.6rem'}}>Что создано с нуля</h3>
        <ul className="insight-list" style={{marginTop: '0.8rem'}}>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Полная автономность: продукт, операционка, контент</span>
          </li>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Инструменты давления на результат: калькуляторы, дашборд, портал</span>
          </li>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Ребрендинг своими силами: логотип, стили, презентации (~800к)</span>
          </li>
          <li className="insight-item" style={{padding: '0.5rem', marginBottom: '0.5rem'}}>
            <CheckCircle className="icon" style={{width: '1.6rem', height: '1.6rem'}} />
            <span className="text" style={{fontSize: '1.1rem'}}>Системный результат: Ultima как автономный юнит</span>
          </li>
        </ul>
      </div>

      <div className="conclusion full-width" style={{marginTop: '1rem'}}>
        <p style={{fontSize: '1.2rem'}}><strong>8 сезон — не провал, а подготовка к смене класса</strong></p>
      </div>
    </div>
  );
}

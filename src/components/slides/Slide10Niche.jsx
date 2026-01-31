import { Users, Target, Clock, TrendingUp } from 'lucide-react';

export default function Slide10Niche() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '0.8rem'}}>Ниша Ультимы</h2>
      <p className="section-subtitle" style={{fontSize: '1.2rem'}}>Где мы играем</p>
      
      <table className="comparison-table" style={{fontSize: '1.1rem', margin: '1.2rem 0'}}>
        <thead>
          <tr>
            <th style={{fontSize: '1.3rem', padding: '0.6rem'}}>Формат</th>
            <th style={{fontSize: '1.3rem', padding: '0.6rem'}}>Что дают</th>
            <th style={{fontSize: '1.3rem', padding: '0.6rem'}}>Ограничения</th>
            <th style={{fontSize: '1.3rem', padding: '0.6rem'}}>Срок</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Курсы</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Знания</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Нет внедрения</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>1-3 месяца</td>
          </tr>
          <tr>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Клубы</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Среду</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Нет давления<br/>Нет фокуса на результат</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Постоянно</td>
          </tr>
          <tr>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Консалтинг</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Решения</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Дорого, не масштабируется</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>3-6 месяцев</td>
          </tr>
          <tr className="highlight-row">
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}><strong>ULTIMA</strong></td>
            <td className="highlight-cell" style={{padding: '0.6rem', fontSize: '1.1rem'}}><strong>Подготовка + решения + внедрение = результат</strong></td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}>Требует готовности работать лично</td>
            <td style={{padding: '0.6rem', fontSize: '1.1rem'}}><strong>6 месяцев</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

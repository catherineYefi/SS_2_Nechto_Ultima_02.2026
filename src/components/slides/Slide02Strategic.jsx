import { Users, Target, MessageCircle, BarChart3, Zap, TrendingUp, MessageSquare, CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide02Strategic() {
  return (
    <div className="slide">
      <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Нечто: сообщество или система результата?</h2>
      
      <table className="comparison-table" style={{fontSize: '1.2rem', margin: '1.5rem 0'}}>
        <thead>
          <tr>
            <th style={{fontSize: '1.4rem', padding: '0.8rem'}}><Users className="inline-icon" /> Сообщество</th>
            <th className="highlight-col" style={{fontSize: '1.4rem', padding: '0.8rem'}}><Target className="inline-icon" /> Система результата</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{padding: '0.8rem', fontSize: '1.2rem'}}><Users className="inline-icon" /> Среда</td>
            <td className="highlight-cell" style={{padding: '0.8rem', fontSize: '1.2rem'}}><BarChart3 className="inline-icon" /> Подготовка</td>
          </tr>
          <tr>
            <td style={{padding: '0.8rem', fontSize: '1.2rem'}}><MessageCircle className="inline-icon" /> Смыслы</td>
            <td className="highlight-cell" style={{padding: '0.8rem', fontSize: '1.2rem'}}><BarChart3 className="inline-icon" /> Управленческие решения</td>
          </tr>
          <tr>
            <td style={{padding: '0.8rem', fontSize: '1.2rem'}}><Zap className="inline-icon" /> Энергия</td>
            <td className="highlight-cell" style={{padding: '0.8rem', fontSize: '1.2rem'}}><TrendingUp className="inline-icon" /> Внедрение</td>
          </tr>
          <tr>
            <td style={{padding: '0.8rem', fontSize: '1.2rem'}}><MessageSquare className="inline-icon" /> Обсуждение</td>
            <td className="highlight-cell" style={{padding: '0.8rem', fontSize: '1.2rem'}}><CheckCircle className="inline-icon" /> Измеримые изменения</td>
          </tr>
        </tbody>
      </table>
      
      <div className="conclusion" style={{marginTop: '1.5rem'}}>
        <Lightbulb className="conclusion-icon" />
        <p style={{fontSize: '1.3rem'}}><strong>Вывод:</strong> Ультима — механизм перехода Нечто в систему результата.</p>
      </div>
    </div>
  );
}

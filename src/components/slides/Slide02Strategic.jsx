import { Users, Target, MessageCircle, BarChart3, Zap, TrendingUp, MessageSquare, CheckCircle, Lightbulb } from 'lucide-react';

export default function Slide02Strategic() {
  return (
    <div className="slide text-plus-20">
      <h2>Нечто: сообщество или система результата?</h2>
      
      <table className="comparison-table">
        <thead>
          <tr>
            <th><Users className="inline-icon" /> Сообщество</th>
            <th className="highlight-col"><Target className="inline-icon" /> Система результата</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Users className="inline-icon" /> Среда</td>
            <td className="highlight-cell"><BarChart3 className="inline-icon" /> Подготовка</td>
          </tr>
          <tr>
            <td><MessageCircle className="inline-icon" /> Смыслы</td>
            <td className="highlight-cell"><BarChart3 className="inline-icon" /> Управленческие решения</td>
          </tr>
          <tr>
            <td><Zap className="inline-icon" /> Энергия</td>
            <td className="highlight-cell"><TrendingUp className="inline-icon" /> Внедрение</td>
          </tr>
          <tr>
            <td><MessageSquare className="inline-icon" /> Обсуждение</td>
            <td className="highlight-cell"><CheckCircle className="inline-icon" /> Измеримые изменения</td>
          </tr>
        </tbody>
      </table>
      
      <div className="conclusion">
        <Lightbulb className="conclusion-icon" />
        <p><strong>Вывод:</strong> Ультима — механизм перехода Нечто в систему результата.</p>
      </div>
    </div>
  );
}

export default function Slide10Niche() {
  return (
    <div className="slide">
      <h2>Ниша Ультимы</h2>
      <p className="section-subtitle section-subtitle--hero">Где мы играем</p>

      <table className="comparison-table presentation-table">
        <thead>
          <tr>
            <th>Формат</th>
            <th>Что дают</th>
            <th>Ограничения</th>
            <th>Срок</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Курсы</td>
            <td>Знания</td>
            <td>Нет внедрения</td>
            <td>1-3 месяца</td>
          </tr>

          <tr>
            <td>Клубы</td>
            <td>Среду</td>
            <td>
              Нет давления
              <br />
              Нет фокуса на результат
            </td>
            <td>Постоянно</td>
          </tr>

          <tr>
            <td>Консалтинг</td>
            <td>Решения</td>
            <td>Дорого, не масштабируется</td>
            <td>3-6 месяцев</td>
          </tr>

          <tr className="highlight-row">
            <td>
              <strong>ULTIMA</strong>
            </td>
            <td className="highlight-cell">
              <strong>Подготовка + решения + внедрение = результат</strong>
            </td>
            <td>Требует готовности работать лично</td>
            <td>
              <strong>6 месяцев</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

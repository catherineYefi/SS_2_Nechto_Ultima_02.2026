export default function Slide14Concept() {
  const points = [
    'Не расписание встреч → спроектированный опыт',
    'Ритм + события + усиления = постоянная энергия',
    '"Я в элитном контуре для избранных"',
  ];

  return (
    <div className="slide">
      <h2>ULTIMA 9.0 — от группы к режиму</h2>

      <div className="big-quote highlight big-quote--hero">
        <p>⚡ УЛЬТИМА = РЕЖИМ</p>
      </div>

      <p className="centered-subheader centered-subheader--tight">ЧТО ЭТО ЗНАЧИТ:</p>

      <div className="concept-cards concept-cards--grid">
        {points.map((t) => (
          <div key={t} className="concept-card concept-card--tight">
            <p>{t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Slide01Title() {
  return (
    <div className="slide title-slide" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center'
    }}>
      <h1 className="main-title">ULTIMA 9.0</h1>
      <p className="subtitle">Где цели превращаются в результат</p>
      <div className="divider"></div>
      <p className="tagline">От сообщества → к управляемым бизнес-результатам</p>
      <p className="tagline-secondary">Ритм, который дает глубину и пространство для внедрений</p>
    </div>
  );
}

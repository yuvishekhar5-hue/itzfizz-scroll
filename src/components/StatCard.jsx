export default function StatCard({ value, text, bg, fg }) {
  return (
    <div className="stat card" style={{ background: bg, color: fg }}>
      <div className="n">{value}</div>
      <p>{text}</p>
    </div>
  );
}

import Hero from "./components/Hero.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <footer className="h-[40vh] flex items-center justify-center text-sm" style={{ color: "var(--mut)" }}>
        End of demo — scroll back up to replay.
      </footer>
    </>
  );
}

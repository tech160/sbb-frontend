export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>SBB Frontend</h1>
      <p>Service is running.</p>
      <p>
        Health:{" "}
        <a href="/api/health" target="_blank" rel="noreferrer">
          /api/health
        </a>
      </p>
    </main>
  );
}

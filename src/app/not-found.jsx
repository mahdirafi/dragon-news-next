export default function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.ghost}>👻</div>

        <h1 style={styles.title}>404</h1>
        <p style={styles.text}>This page got lost in space.</p>

        <a href="/" style={styles.button}>
          Go Back Home
        </a>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    color: "white",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  card: {
    maxWidth: "400px",
  },
  ghost: {
    fontSize: "80px",
    animation: "float 2s ease-in-out infinite",
    marginBottom: "10px",
  },
  title: {
    fontSize: "72px",
    margin: "0",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "20px",
  },
  button: {
    display: "inline-block",
    padding: "10px 18px",
    background: "#38bdf8",
    color: "#0f172a",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
};
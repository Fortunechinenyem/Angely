export default function ProgressBar({ raised, goal }) {
  const percentage = (raised / goal) * 100;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "#4caf50",
          height: "10px",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
}

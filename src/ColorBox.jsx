export function ColorBox({ clr }) {
  const styles = {
    background: clr,
    height: "25px",
    width: "250px",
    marginTop: "8px",
  };

  return <div style={styles}></div>;
}

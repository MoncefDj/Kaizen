export const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <h3>{today.toDateString()}</h3>
    </footer>
  );
};

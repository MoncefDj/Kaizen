export const Footer = () => {
  const today = new Date();

  return (
    <footer className="text-lg bg-red-400 text-red-50 flex justify-center items-center p-2">
      <h3>{today.toDateString()}</h3>
    </footer>
  );
};

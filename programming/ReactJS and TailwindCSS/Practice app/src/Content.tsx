export const Content = () => {
  const randomName = (): string => {
    const names = [`Ahmed`, `Mohammed`, `Ali`];
    return names[Math.floor(Math.random() * 3)];
  };

  return (
    <main>
      <h2>Welcome {randomName()}!</h2>
    </main>
  );
};

import { useState } from "react";

export const Content = () => {
  const [name, setName] = useState(``);
  const randomName = (): void => {
    const names = [`Ahmed`, `Mohammed`, `Ali`];
    setName(names[Math.floor(Math.random() * 3)]);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h2>Welcome {name}!</h2>
      <button
        className="bg-red-400 hover:bg-red-500 rounded-md py-1 px-2 my-2 text-red-50"
        onClick={randomName}
      >
        Change Name
      </button>
    </main>
  );
};

const toggleDark = document.getElementById(`toggleDarkButton`);
toggleDark?.addEventListener(`click`, (): void => {
  const classList = document.documentElement.classList;
  classList.contains(`dark`) ? classList.remove(`dark`) : classList.add(`dark`);
});

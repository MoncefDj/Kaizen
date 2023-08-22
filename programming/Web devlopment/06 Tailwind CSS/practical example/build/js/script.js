"use strict";
const toggleDark = document.getElementById(`toggleDarkButton`);
toggleDark === null || toggleDark === void 0 ? void 0 : toggleDark.addEventListener(`click`, () => {
    const classList = document.documentElement.classList;
    classList.contains(`dark`) ? classList.remove(`dark`) : classList.add(`dark`);
});

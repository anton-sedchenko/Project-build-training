export const highlight = (el) => {
  let selectedBtn = el;

  selectedBtn.classList.add('highlight');
  setTimeout(() => {
    selectedBtn.classList.remove('highlight');
  }, 2000);
}

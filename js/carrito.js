const qtyInputs = document.querySelectorAll(".carditem__cantidad");

qtyInputs.forEach((input) => {
  const plusButton = input.children[1].children[0];
  const minusButton = input.children[1].children[1];
  let inputValue = Number(input.children[0].value);

  plusButton.addEventListener("click", () => {
    if (inputValue < 99) {
      inputValue += 1;
      input.children[0].value = inputValue;
    }
  });

  minusButton.addEventListener("click", () => {
    if (inputValue > 1) {
      inputValue -= 1;
      input.children[0].value = inputValue;
    }
  });
});

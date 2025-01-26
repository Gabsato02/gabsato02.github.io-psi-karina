function handleToggleItem(el) {
  el.classList.toggle('opened');
}

function handleListItems() {
  const listItems = document.querySelectorAll('.list-item-header');

  listItems.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      handleToggleItem(el.parentElement);
    });
  });
}

handleListItems();
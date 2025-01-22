function handleToggleItem(el) {
  el.classList.toggle('opened');
}

function handleListItems() {
  const disorderItems = document.querySelectorAll('.list-item');

  disorderItems.forEach((el) => {
    console.log(el)
    el.addEventListener('click', (e) => {
      e.preventDefault();
      
      handleToggleItem(el);
    });
  });
}

handleListItems();
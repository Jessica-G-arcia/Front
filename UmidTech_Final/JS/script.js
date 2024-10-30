function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function increment(id) {
    const input = document.querySelector(`#${id} input`);
    input.value = parseInt(input.value) + 1;
}
  
function decrement(id) {
    const input = document.querySelector(`#${id} input`);
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
}
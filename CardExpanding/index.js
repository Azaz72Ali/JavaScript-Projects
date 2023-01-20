const panelClick = document.querySelectorAll('.panel');

panelClick.forEach(x => {
  x.addEventListener('click', function () {
    remove();
    x.classList.add('active');
  });
});
function remove() {
  panelClick.forEach(x => {
    x.classList.remove('active');
  });
}

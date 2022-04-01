let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelectorAll('.toggle')

for (const element of toggle) {
  element.addEventListener('click', () => sidebar.classList.toggle('active'));
}
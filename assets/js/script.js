// Simple sidebar toggle (example)
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
const sidebar = document.querySelector('[data-sidebar]');

sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Add a class to the sidebar when open
});

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleDarkMode');
  
  if (toggleBtn) {
    const body = document.body;
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  }
});

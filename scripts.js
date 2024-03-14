    document.addEventListener("DOMContentLoaded", function() {
    // Mostrar modal al hacer clic en el botón de una tarjeta
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const target = document.querySelector(card.getAttribute('data-modal-target'));
      card.querySelector('.button').addEventListener('click', function() {
        target.style.display = 'block';
      });
    });
  
    // Cerrar modal al hacer clic en el botón de cerrar
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.querySelector('.close-button').addEventListener('click', function() {
        modal.style.display = 'none';
      });
    });
  
    // Cerrar modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });
  
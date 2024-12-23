document.addEventListener('DOMContentLoaded', function () {
      const matCard = document.querySelector('mat-card > h1');
      if (matCard) {
         matCard.addEventListener('click', (event) =>{ 
            window.location.href = '/index.html'
         });
         matCard.style = 'cursor: pointer';
      }
});

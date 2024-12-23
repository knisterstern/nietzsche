// This script is currenty not in use.
document.addEventListener('DOMContentLoaded', function () {
   
   pbEvents.subscribe("pb-update", "ed", (ev) => {
      const link = ev.detail.root.querySelector('link');
      link.setAttribute('href', '/css/nietzsche-ed.css');
      const view = ev.detail.root.querySelector('pb-view#view1');
      console.log(view);
   });
});


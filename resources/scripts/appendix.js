document.addEventListener('DOMContentLoaded', function () {
   let initialized = false;
   let counter = 0;
    
    pbEvents.subscribe("pb-update", "transcription", (ev) => {
       const template = document.querySelector('template#api-content')
       template.content.querySelectorAll('div[data-id]').forEach(content =>{
          if (content.dataset.count > 0) {
             let target = ev.detail.root.querySelector('div#' + content.dataset.id);
             if (target) {
               target.append(content.cloneNode(true));
             }
          } 
       });
       ev.detail.root.querySelectorAll('a.resolve[data-id]').forEach(a =>{
          let selector = 'pb-link[xml-id=\"' + a.dataset.id + '\"], a[data-id=\"' + a.dataset.id + '\"]'
          let target = template.content.querySelector(selector)
          if (target) {
            console.log('pb-update: replacing', a, target);
            a.replaceWith(target.cloneNode(true));
          }
       });
       const id = window.location.hash
       if (id) {
         pbEvents.emit('my-scroll', 'transcription', { source: ev, id: id });
       }
    }); 
        
});

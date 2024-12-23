document.addEventListener('DOMContentLoaded', function () {
    
    pbEvents.subscribe("pb-update", "transcription", (ev) => {
       if (!pbRegistry.state.path.startsWith('meta-dm')) {
          ev.detail.root.querySelectorAll('pb-link[xml-id]').forEach(link =>{
             if(!link.path){
                let a = link.querySelector('a').cloneNode(true);
                a.setAttribute('href', '/meta-dm/index.html#' + link.getAttribute('xml-id'));
                link.replaceWith(a);
             }
          });
       }
    }); 
        
});

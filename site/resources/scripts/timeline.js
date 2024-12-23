document.addEventListener('DOMContentLoaded', function () {
    const id = (document.location.hash) ? document.location.hash.substring(1) : null;
    const apis = [];
    const inViews = [];
    const outViews = [];

    
    pbEvents.subscribe("pb-start-update", "timeline", (ev) => {
        inViews.push(ev.target);
    }); 
    pbEvents.subscribe("pb-end-update", "timeline", (ev) => {
       let view = inViews.pop(ev.target); 
       outViews.push(view);
       if (inViews.length == 0) {
         const template = document.querySelector('template#api-content')
         template.content.querySelectorAll('div[data-id]').forEach(item =>{
            let filteredViews = outViews.filter(view =>view.id == item.dataset.id);
            if (filteredViews.length > 0) {
               let view = filteredViews[0];
               view.shadowRoot.children[0].append(item);
            }
         });
         const id = window.location.hash
         if (id) {
            let viewId = id.replace('#', '');
            let filteredViews = outViews.filter(view =>view.id == viewId);
            if (filteredViews.length > 0){
               showTarget(filteredViews[0], filteredViews[0].shadowRoot);
            }
         }
      }
    }); 
        
});

var PAGE_DICT = {
    'ed': 'facsimile',
    'cb': 'view1',
    'dm': 'pageInfo'
}
function addId2Href(id) {
   Array.from(document.querySelectorAll('a[href$="html"]')).forEach(a =>{
      a.href = a.href + "?id=" + id;
   });
}

document.addEventListener('DOMContentLoaded', function () {
   var current_target = 'pageInfo';
   const pbDoc = document.querySelector('#document1');
   if (pbDoc) {
      const permalink = pbDoc.dataset.originPath;
      if (PAGE_DICT.hasOwnProperty(permalink)){
        current_target = PAGE_DICT[permalink];
      }
      let targetState = (permalink) ? permalink + '/index.html'  : '/index.html' ;
      pbRegistry.state.path = targetState;
      if (pbRegistry.state.id) {
         addId2Href(pbRegistry.state.id); 
      }
      window.history.replaceState(null, null, targetState + window.location.hash);


      pbEvents.subscribe("pb-navigate", "transcription", (ev) => {
         if (pbRegistry.state.id) {
            addId2Href(pbRegistry.state.id); 
         }
      });
   }
   
    document.querySelectorAll('[data-target]').forEach((link) => {
        const target = document.querySelector(link.dataset.target);
        if (target){
            if (target.id != current_target){
                target.classList.add('noDisplay');
            }
            link.addEventListener('click', (ev) => {
                pbEvents.emit('toggle-event', null, ev)
            });
        } else {
            delete link.dataset.target;
            link.classList.add('noDisplay');
        }
    });
  
    pbEvents.subscribe('toggle-event', null, function(ev){
        const eventTarget = ev.detail.target;
        document.querySelectorAll('[data-target]').forEach((link) => {
            const target = document.querySelector(link.dataset.target);
            if (link === eventTarget) {
                target.classList.toggle('noDisplay');
                if (ev.detail.target.dataset.altIcon){
                    let alt = ev.detail.target.icon;
                    ev.detail.target.icon = ev.detail.target.dataset.altIcon;
                    ev.detail.target.dataset.altIcon = alt;
                }
            } else {
                target.classList.add('noDisplay');
            }
        });
    });
 
  
   
});


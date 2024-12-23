function showTarget(target, root){
   target.scrollIntoView(true);
   root.querySelectorAll('.myhighlight').forEach(highlighted =>{
      highlighted.classList.remove('myhighlight');
   });
   if (target.classList.contains('noscroll') || target.classList.contains('timelineEntry')) {
      target.classList.add("myhighlight");
   }
}
document.addEventListener('DOMContentLoaded', function () {
    const appHeader = document.querySelector('app-toolbar');
    const root = document.querySelector(':root');
    if (appHeader && root) {
        const headerHeight = appHeader.getBoundingClientRect().bottom;
        root.style.setProperty('--scroll-top', headerHeight + 'px');
    }
    pbEvents.subscribe("pb-update", "transcription", (ev) => {
       console.log(ev);
        const id = window.location.hash
        if (id && (pbRegistry.state.path.startsWith('meta-') || pbRegistry.state.path.startsWith('qv'))){
            console.log('my pb-update', id, ev.detail.root.querySelector(id))
            const target = ev.detail.root.querySelector(id);
            if (target){
               showTarget(target, ev.detail.root); 
            }    
        }
        
    });
    pbEvents.subscribe("my-scroll", "transcription", (ev) => {
         const target = ev.detail.source.target.renderRoot.querySelector(ev.detail.id)
         if (target) {
            showTarget(target, ev.detail.source.target.renderRoot);
         }

    });
            
    pbEvents.subscribe("pb-refresh", "transcription", (ev) => {
        const id = document.location.hash.substring(1)
        if (id){  
            const target = document.getElementById(id);
            if (target){
               showTarget(target, document); 
            }    
        } 
    });
});

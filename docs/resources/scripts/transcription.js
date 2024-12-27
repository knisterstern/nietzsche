const ED = 'ed'
const PSELECTOR = 'p.tei-p'

document.addEventListener('DOMContentLoaded', function () {
    const collapseConfig = {  };
    /* Fetch json and save files information for updating a[@href] in genesisView1 and concordanceView1.
    */
    let files = [];
    let jsonDealer = new JsonDealer();
    jsonDealer.fetch('/resources/data/data.json').then((data) =>{
      files = data.files;
    });
    

    pbEvents.subscribe("pb-update", 'transcription', (ev) => {
       if(pbRegistry.state.path.startsWith(ED)) {
        ev.detail.root.querySelectorAll('.tei-line span span.tei-line').forEach(line =>{
            Array.from(line.childNodes).forEach(child =>{
                line.removeChild(child); 
            });
        });
        ev.detail.root.querySelectorAll(PSELECTOR).forEach(p =>{
            if (p.nextElementSibling && p.nextElementSibling.classList && p.nextElementSibling.classList.contains('head')) {
                const lines = p.querySelectorAll('.tei-line');
                if (lines.length > 0){
                    lines[lines.length-1].classList.add('last');
                }
            }   
        });
       }
    });
    pbEvents.subscribe("pb-update", ED, (ev) => {
      /* update <a/> in ED views 
       * */
       console.log('pb-update', ED, ev);
      const link = ev.detail.root.querySelector('link');
      link.setAttribute('href', ev.target.loadCss);
      let fileFilter = files.filter(file =>file.target == ED)
      if (fileFilter.length > 0) {
          let filter = fileFilter[0];
          let selector = 'a[href*=\"' + filter.name + '\"]' 
          let target = filter.target + '/index.html'
          ev.detail.root.querySelectorAll(selector).forEach(a =>{
               let href = a.getAttribute('href').replace(filter.name, target); 
               a.setAttribute('href', href);
          });
          let selectorDoc = 'a[data-doc=\"' + filter.name + '\"]';
          ev.detail.root.querySelectorAll(selectorDoc).forEach(a =>{
               let href = '/' + target + '?id=' + a.dataset.id; 
               a.setAttribute('href', href);
          });
      }
    });
  
     
   pbEvents.subscribe("pb-update", "pageInfo", (ev) => {
      /* Add href to <a/> in genesis and concordance view from json data.
       * */
       if (ev.target.id == 'genesisView1' || ev.target.id == 'concordanceView1') {
            ev.detail.root.querySelectorAll('[data-doc]').forEach(a =>{
               let fileFilter = files.filter(file =>file.name == a.dataset.doc)
               if (fileFilter.length > 0){
                  let id = (fileFilter[0].prefix) ? fileFilter[0].prefix + a.dataset.id : a.dataset.id;
                  // Activate <a/> for non self-referencing links
                  if(pbRegistry.state.path != fileFilter[0].target + '/index.html' || pbRegistry.state.id != id){
                     // Activate only those whose targets exist
                     if (existingPBs[fileFilter[0].target] && existingPBs[fileFilter[0].target].filter(pb =>pb.id == id).length > 0){
                        a.setAttribute('href', '/' + fileFilter[0].target + '/index.html?id=' + id);
                     }
                  }
               }
            });
       }
       /* Set pb-collapse state from collapseConfig and add event listener 'collapse-toggle'
        */
       const target = ev.detail.root.querySelector('pb-collapse');
       if (target && ev.target['map']){
           if(!collapseConfig.hasOwnProperty(ev.target.map)){
               collapseConfig[ev.target.map] = false;
           }
           target.dataset.key = ev.target.map;
           target.addEventListener('click', (ev) => {
                pbEvents.emit('collapse-toggle', 'transcription', ev);
           });
           target.opened = collapseConfig[ev.target.map];  
       }
        
   });
   
   pbEvents.subscribe("collapse-toggle", "transcription", (ev) => {
      /* Save collapse state to collapseConfig in order to reuse it after navigation.
       */
       const collapse = ev.detail.target;
       collapseConfig[collapse.dataset.key] = collapse.opened;
   });
  
});


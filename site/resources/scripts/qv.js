document.addEventListener('DOMContentLoaded', function () {
    /* Fetch json and save files information for updating a[@href] in genesisView1 and concordanceView1.
    */
    let files = [];
    let jsonDealer = new JsonDealer();
    jsonDealer.fetch('/resources/data/data.json').then((data) =>{
      files = data.files;
    });
     
   pbEvents.subscribe("pb-update", "transcription", (ev) => {
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
        
   });
  
});


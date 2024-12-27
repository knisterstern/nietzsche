class JsonDealer {
   async fetch(url) {
      const data = await fetch(url).then((response) => {
            if (!response.ok) {
               throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        }).then((json) => {
            return json    
        }).catch((error) => {
            console.error(`Could not fetch id: ${error} on URL ${url}`);
      });
      return data;
   }
}

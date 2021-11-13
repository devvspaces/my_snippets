function setNewPageHistory(city_name){
    let current_url = window.location.href;

    // Remove any current query params
    let base_url = current_url.split('?')[0]

    const nextURL = base_url + '?city_name=' + encodeURI(city_name) ;
    const nextTitle = 'Segmentio Search';
    const nextState = { additionalInformation: 'Updated the URL with JS' };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);

    // This will replace the current entry in the browser's history, without reloading
    window.history.replaceState(nextState, nextTitle, nextURL);
  }

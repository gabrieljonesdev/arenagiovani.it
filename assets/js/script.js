if (window.location.hostname !== 'https://18f.it') {
    var newUrl = 'https://18.it' + window.location.pathname + window.location.search;
    window.location.replace(newUrl);
  }

const indexdb =  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
let DB;
const request = indexdb.open("MyTestDatabase", 3);
request.onerror = event => {
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };
  
  request.onsuccess = event => {
    
    db = event.target.result;
    console.log("You successfully started the app.");
    if(navigator.online){checkdatabase}
  };

  request.onupgradeneeded = event => {
    // Save the IDBDatabase interface
    const db = event.target.result;
  
    // Create an objectStore for this database
    const objectStore = db.createObjectStore("name", { keyPath: "myKey" });
  };
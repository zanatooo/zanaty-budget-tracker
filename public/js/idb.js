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
  request.onsuccess = function(event)
{
    db = event.target.result;
    if(navigator.onLine)
    {
        uploadRecord();
    }  
};

request.onerror = function(event) 
{
    console.log(event.target.errorCode);
};

function saveRecord(record)
{
    const transaction = db.transaction(['new_deposit'],'readwrite');

    const depositObject = transaction.objectStore('new_deposit');

    depositObject.add(record);
}

function uploadRecord()
{
    const transaction = db.transaction(['new_deposit'],'readwrite');

    const depositObject = transaction.objectStore('new_deposit');

    const getAll = depositObject.getAll();

    getAll.onsuccess = function()
    {
        if(getAll.result.length)
        {
            fetch("/api/transaction", 
            {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                }
            })
            .then(response => 
            {    
                return response.json();
            })
            .then(data => 
            {
                if (data.message) 
                {
                    throw new Error(data);
                }

                const transaction = db.transaction(['new_deposit'],'readwrite');

                const depositObject = transaction.objectStore('new_deposit');

                depositObject.clear();

                alert('All saved deposits have been submitted!');
            })
            .catch(err => 
            {
                console.log(err);
            });
        }
    };
}

window.addEventListener('online', uploadRecord);
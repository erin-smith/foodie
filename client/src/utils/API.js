

 export function showAllChefs() {
    fetch("http://localhost:3000/api/chefs", {
    method: 'GET',
    headers: {
          "Content-type": "application/json"
      }
    })
    .then(response => response.json())
  };

  export function showAllLocals(){
    fetch("http://localhost:3000/api/locals", {
      method: 'GET',
      headers: {
            "Content-type": "application/json"
        }
      })
      .then(response => response.json())
    };


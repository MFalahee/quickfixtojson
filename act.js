const fs = require('fs');

function changeAnimalKarma() {
  fetch("./jsons/StoreItems.json")
  .then(res => {
      return res.json();
  }).then(output => {
    let storeItems = output;
    let animalList = storeItems.items.filter(x => {
      return x.category === "Animals"; }) 
    let nameList = animalList.map(x => {
      return x.defname
    })
    fetch("./jsons/itemdata.json").then(res => {
      return res.json();
      }).then(data => {
          let items = data;
    nameList.forEach(x => {
      console.log(items[x])
      items[x].KarmaType = "Bad";
    })

    const potato = JSON.stringify(items)
    fs.writeFile('newItemList.json', potato, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    });
    })
  })
}


changeAnimalKarma();
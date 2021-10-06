import React from 'react';

let storeItems = require('./StoreItems.json')
let itemData = require('./itemdata.json')

function download(content, fileName, contentType) {
  var a = document.createElement('a')
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName
  a.click();
}

function changeAnimalKarma() {
  console.log(storeItems)
  console.log(itemData)

  //get animals from store items
  let animalList = storeItems.items.filter(x => {
    return x.category === "Animals"
  })


  //grab names to identify in storeitems
  let nameList = animalList.map(x => {
    return x.defname
  })

  nameList.forEach(x => {
    itemData[x].KarmaType = "Bad"
  })
  let potatoString = JSON.stringify(itemData);
  // try {
  //   writeJsonFile('/newItemList.json', potatoString)
  //   console.log("File written.")
  // } catch (err) {
  //   console.error(err)
  // }

  download(potatoString, 'newItemList.json', 'text/plain');


/** first attempt at fetching data which is failing promises left and right. Gonna take another stab.
//   fetch("public\StoreItems.json").then(
//     (res) => console.log(res)).catch(err => console.error(err)) 

//   fetch("./public/StoreItems.json").then(res => {
//         console.log(res);
//         return res;
//   }).then(output => {
//       console.log(output.json)
//       let storeItems = output.json;
//       let animalList = storeItems.items.filter(x => {
//         return x.category === "Animals"; }) 
//       let nameList = animalList.map(x => {
//         return x.defname
//     })


//   fetch("/public/itemdata.json").then(res => {
//     return res.json();
//     }).then(data => {
//         let items = data;
//     nameList.forEach(x => {
//         console.log(items[x])
//         items[x].KarmaType = "Bad";
//     })

//   const potato = JSON.stringify(items)
//   fs.writeFile('./public/newItemList.json', potato, (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("JSON data is saved.");
//   });
//   })
// })
// }  
**/
}

function Act(props) {
  return (<button onClick={changeAnimalKarma()}>
        gogo SAVE!
        </button>)
}
  

export default Act;
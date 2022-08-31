import { AddComponents } from "../Inspector/Components/AddComponents";

import * as Scene from "../../Core/Scene";

var entities = document.getElementById("entities").getElementsByTagName("li");
var entityClicked = null;
for(let i = 0; i < entities.length; i++){
  entities[i].onclick = () =>{
    entityClicked = entities[i].innerText;
    document.getElementById("Entitie_Name").innerHTML = entityClicked;
    showComponents(entityClicked);

  };
}

const ul = document.getElementById("inspector");

function showComponents(name){
  for(let i = 0; i < Scene.getGameObjects().length; i++){
    if( Scene.getGameObjects()[i].getName() == name){
      var currGameObject = Scene.getGameObjects()[i];
      AddComponents(currGameObject);
    }
  }
}
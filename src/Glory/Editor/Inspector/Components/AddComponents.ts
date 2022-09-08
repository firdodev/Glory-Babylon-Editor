import { GameObject } from "../../../Core/Components/GameObject";
import { MeshComponent } from "../../../Core/Components/Mesh/MeshComponent";

const ul = document.getElementById("inspector");
var allComponent = document.getElementById("inspector").getElementsByTagName("li");

export var posInputX;
export var posInputY;
export var posInputZ;
export var rotInputX;
export var rotInputY;
export var rotInputZ;

export function AddComponents(gameObject: GameObject){
  if(allComponent.length > 0){
    for(let i = 0; i < allComponent.length; i++){
      allComponent[i].remove();
    }
  }
  const li = document.createElement("li");
  for(let i = 0; i < gameObject.components.length; i++){
    li.appendChild(document.createElement("h5")).innerHTML = gameObject.components[i].name;
    li.appendChild(document.createElement("br"));
    showAllPublicVariables(gameObject, li, i);
    ul.appendChild(li);
  }
}

function showAllPublicVariables(gameObject: GameObject, li: HTMLLIElement, index){
  // console.clear();
  for(let i in gameObject.components[index]){
    if(!(gameObject[i] instanceof Object) && gameObject[i] !== undefined){
      if(i !== "name"){
        li.appendChild(document.createElement("br"));
        li.appendChild(document.createTextNode(i + ": " + gameObject[i]));
        li.appendChild(document.createElement("br"));
      }
    }
  }
}

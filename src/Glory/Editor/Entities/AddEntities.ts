const ul = document.getElementById("entities");

export function addEntity(name: string){
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}
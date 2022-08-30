import { Component } from "./Component";

export class ComponentList{
  components: Array<Component>;

  constructor(){
    this.components = new Array<Component>();
  }

  addComponents(componentType: Component){
    this.components.push(componentType);
  }

  removeComponentByName(name:String){
    for(let index in this.components){
      if(this.components[index].name === name){
        this.components.splice(Number(index), 1);
      }
    }
  }

  removeComponent(component){
    for(let i in this.components){
      if(this.components[i] === component){
        delete this.components[i];
        this.components.splice(Number(i), 1);
      }
    }
  }
}
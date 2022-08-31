import { GameObject } from "./GameObject";

export class Component{
  public name: string;
  public object: GameObject;

  constructor(name: string, object: GameObject){
    this.name = name;
    this.object = object;
  }

  public getGameObject(): GameObject{
    return this.object;
  }

  private getObjectComponents(){
    return this.object.components;
  }

  public dispose(){
    for(let i in this.getObjectComponents()){
      this.getGameObject()[i].dispose();
    }
  }
}
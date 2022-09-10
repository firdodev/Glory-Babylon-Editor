import * as Scene from "../Scene";
import { ComponentList } from "./ComponentList";
import { TransformComponent } from "./TransformComponent";

export class GameObject extends ComponentList{
  private scene;
  private name: string;

  public transform: TransformComponent;

  constructor(name:string, scene){
    super();
    this.name = name;
    this.scene = scene;

    this.init();
  }

  init(){
    Scene.addObject(this);
    this.transform = new TransformComponent(this);
    this.addComponent(this.transform);
  }

  public getScene(){
    return this.scene;
  }

  public getName(){
    return this.name;
  }

  public addComponent(componentType){
    this.addComponents(componentType);
  }

  public getComponents(){
    return this.components;
  }

  public dispose(){
    Scene.removeObject(this);
  }
}

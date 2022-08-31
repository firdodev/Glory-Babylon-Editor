import * as BABYLON from "@babylonjs/core";
import { GameObject } from "./Components/GameObject";
import * as Editor from "../Editor/index";
import * as LOG from "./Log";

  var scene: BABYLON.Scene;
  var engine: BABYLON.Engine;

  var gameObjects: Array<GameObject>;

  export function init(canvas){
    if(canvas == null || canvas == undefined){
      LOG.ERROR("You didn't provided us with canvas.");
    }else{
      createEngine(canvas);
      createScene();
      LOG.INFO("Scene created successfully!");
    }

    gameObjects = new Array<GameObject>;
  }

  function createScene(){
    scene = new BABYLON.Scene(engine);
  }

  function createEngine(canvas){
    engine = new BABYLON.Engine(canvas, true);
  }




  //Get methods
  export function getScene(): BABYLON.Scene{
    return scene;
  }

  export function getEngine(): BABYLON.Engine{
    return engine;
  }

  export function addObject(gameObject: GameObject){
    gameObjects.push(gameObject);
    Editor.addEntity(gameObject.getName());
  }

  export function removeObject(gameObject: GameObject){
    for(let i = 0; i < gameObjects.length; i++){
      if(gameObjects[i] === gameObject){
        
        let object = gameObjects[i];
        while(object.components.length > 0){
          object.components[0].dispose();
          object.removeComponent(object.components[0]);
        }

        delete gameObjects[i];
        gameObjects.splice(Number(i), 1);
        return;
      }
    }
  }

  export function getGameObjects(){
    return gameObjects;
  }
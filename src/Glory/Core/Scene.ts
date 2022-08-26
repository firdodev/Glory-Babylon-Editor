import * as BABYLON from "@babylonjs/core";
import { GameObject } from "./Components/GameObject";
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
  }

  export function removeObject(gameObject: GameObject){
    for(let index in gameObjects){
      if(gameObjects[index] === gameObject){
        gameObjects.splice(Number(index), 1);
      }
    }
  }

  export function getGameObjects(){
    return gameObjects;
  }
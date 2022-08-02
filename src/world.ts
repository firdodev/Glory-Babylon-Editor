import * as BABYLON from '@babylonjs/core';
import * as Utils from './Utils';

import { Player } from './player';
import * as Glory from './Glory';
import { Client } from './Multiplayer/client/client';

export class World{
    
    private scene;
    private engine;
    private inputManager: Glory.InputManager;
    public player: Player;
    // private player2: Player;
    private CharacterController: Glory.CharacterController;
    // private CharacterController2: CharacterController;
    public client: Client;

    private walkSpeed = 0.05;

    constructor(scene, inputManager: Glory.InputManager, engine){
        this.scene = scene;
        this.engine = engine;
        this.inputManager = inputManager;
        // this.client = new Client();
        this.player = new Player(this.scene, 0.3, 0.3, 0.3, new BABYLON.Vector3(Utils.random(-2, 2), 0, Utils.random(-2, 2)));
        this.CharacterController = new Glory.CharacterController(this.scene, this.player.getMesh());
        this.player.getGameObject().assignComponent(this.CharacterController);

        console.log(this.player.getGameObject().getComponents());
        this.createGround();

        // const player = new Player(this.scene, 0.3, new BABYLON.Vector3(Utils.random(-2,2), 0, 0));
        // const CharacterController2 = new CharacterController(this.scene, player.getMesh());
        
        // this.client.getSocket().on('new_user', function(msg) {
        // })

        // this.client.getSocket().on('user_disconnected', function(msg) {
            
        // })
    }

    public createGround(){
        var ground = BABYLON.MeshBuilder.CreateGround("ground",{ width: 6, height: 6});
        ground.material = Utils.colorMaterial(new BABYLON.Color3(0.3, 0.3, 0.3));
        return ground;
    }

 

    public Update(){
        // this.CharacterController.move(new BABYLON.Vector3(0, 0, 0.1));
    }
}
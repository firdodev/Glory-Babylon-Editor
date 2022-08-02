import io from "socket.io-client";
import * as BABYLON from "@babylonjs/core";
import { Player } from "../../player";

export class Client{
    
    private socket;


    constructor(){
        this.connect("http://localhost:8080");
    }

    public connect(url){
        this.socket = io(url);

        this.socket.on('connect', ()=> {
            console.log('connected');

            // this.socket.on('new_user', function(msg) {
            //     // this.sendPlayer();
            // })
        });
    }

    public sendPlayer(player){
        
    }

    public getSocket(){
        return this.socket;
    }
    
}
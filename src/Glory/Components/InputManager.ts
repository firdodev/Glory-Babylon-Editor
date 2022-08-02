import * as BABYLON from "@babylonjs/core";

export default class InputManager{
    private event = null;
    private keyDown;

    public init(ev){
        this.event = ev;
        this.keyDown = this.event.key;
    }

    public Horizontal(){
        if(this.keyDown == "a"){
            return -1;
        }
        if(this.keyDown == "d"){
            return 1;
        }
        return 0;
    }

    public Vertical(){
        if(this.keyDown == "w"){
            return 1;
        }
        if(this.keyDown == "s"){
            return -1;
        }
        return 0;
    }

    public getKey(){
        return this.keyDown;
    }

    public reset(){
        this.keyDown = null;
    }
}
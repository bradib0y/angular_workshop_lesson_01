import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 11 + Math.floor((Math.random()*55));
    serverStatus: boolean = this.randomBoolean();

    randomBoolean(){
        if(Math.random()>0.5){return true;}
        else{return false;}
    }

    getStatusStyle(){
        if(this.serverStatus){
            return "badge-success";
        }
        else{
            return "badge-danger";
        }
    }

    getStatusText(){
        if(this.serverStatus){
            return "ON";
        }
        else{
            return "OFF";
        }
    }
}
import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId: number = 1 + Math.floor((Math.random()*55));
    serverStatus: string = "Running";
}
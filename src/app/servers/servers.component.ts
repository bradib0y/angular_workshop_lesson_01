import { Component, OnInit } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = "No server was created";
    serverName: string;
    serverCreated = false;
    serversArray = ["Server 1", "Server 2", "Server 3"];

    constructor() {
        this.ToggleAllowServer();
    }
    ngOnInit() { }

    ToggleAllowServer() {
        setTimeout(
            () => {
                this.allowNewServer = !this.allowNewServer;
            }, 2222
        );
    }

    onCreateServer(){
        this.serverCreationStatus = "Server was created, with name " + this.serverName;
        this.serverCreated = true;
        this.serversArray.push("New server");
    }

    onUpdateServerName(event){
        console.log(event);
        this.serverName = event.target.value;
    }
}

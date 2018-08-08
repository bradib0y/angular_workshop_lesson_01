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
        this.serverCreationStatus = "Server was created";
    }

    onUpdateServerName(event){
        console.log(event);
        this.serverName = event.target.value;
    }
}

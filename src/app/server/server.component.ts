import {Component} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl :'server.component.html',
  styles : [`.online{
    font-style: italic;
  }
  `]
})

export  class ServerComponent{
  serverStatus :string = "offline";
  constructor() {
    this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
  }
  serverId : number = 10;
  getServerId(){
    return this.serverId;
  }

  getColor() {
    return this.serverStatus ==='online' ? 'green' : 'red';
  }
}

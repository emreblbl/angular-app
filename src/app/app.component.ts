import {Component, Injectable, OnInit} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`h3{ color: dodgerblue}`]
})

export class AppComponent {
  allowAddServer : boolean = false;
  title = 'AngularProject';
  serverName :string = "";
  name: any;
  serverCreationStatus:string = "server was not created !";
  userName:string ='';
  serverCreated: boolean=false;
  servers = ["testServer 1","testServer 2"];
  showSecret: boolean = false;
  logs  :number[]= [];

  constructor() {

    setTimeout(()=> {
      this.allowAddServer = true;
    },2000)
  }
  onCreateServer(){
    this.servers.push("new server");
    this.serverCreated =true;
    this.serverCreationStatus = "server was created!"+this.serverName;
  }

  onUpdateServerName($event: any  ) {

      this.serverName =$event.target.value;

  }

  enableOrDisable(): boolean {
    if(this.userName ==''){
      return false;
    }
    return true;
  }

  resetUserName() {
    this.userName = "";
  }

  incrementLog() {
    this.logs.push(this.logs.length+1);
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]' for attribute call. <div app-servers></div>
  // selector: '.app-servers' for class call. <div class='.app-servers'></div>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = "";
  serverCreated: boolean = false;
  servers = ['TestServer A', 'TestServer B'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },
      2000
    )
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateSeverName(event: any){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}

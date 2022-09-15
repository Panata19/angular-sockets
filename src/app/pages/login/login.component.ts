import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public nombre:string = '';

  constructor(
    public webSockets : WebsocketService
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.webSockets.loginws(this.nombre);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public nombre:string = '';

  constructor(
    public webSockets : WebsocketService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.webSockets.loginws(this.nombre).then(
      () =>{
        this.router.navigateByUrl('/mensajes');
      }
    );

  }
}

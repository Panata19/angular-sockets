import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  public texto: string = '';
  public mensajesSubscription! : Subscription;
  public mensajes : any[] =[];
  elemento: any ; 
  
  constructor(
    public chatServices : ChatService
  ) { }
 

  ngOnInit(): void {
    this.elemento =document.getElementById('chat-mensajes');
    this.mensajesSubscription = this.chatServices.getMessages().subscribe(
      msg=>{

        this.mensajes.push(msg);
        setTimeout(()=>{

          this.elemento.scrollTop = this.elemento.scrollHeight;

        },50)
      }
    )
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar(){
    if(this.texto.trim().length == 0){
   
      return;
    }
    this.chatServices.sendMessage(this.texto);
    this.texto = '';
    
  }

}

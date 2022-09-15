import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public usuario!: Usuario ;
  constructor(private socket: Socket) {
    this.checkStatus()
  }

  //Detecta cuando se tiene conexion al servidor y cuando se pierde
  checkStatus(){
    this.socket.on('connect',()=>{
      console.log('Conectado al servidor');
      this.socketStatus = true;
    })

    this.socket.on('disconnect',()=>{
      console.log('Desconectado del servidor');
      this.socketStatus = false;
    })
  }

  /**
   * 
   * @param evento Lo qu quiero emitir 
   * @param payload Infomracion que quiero enviar
   * @param callback La función que quiero ejecutar depues de q se realice el trabajo
   */
  emit(evento:string, payload?: any, callback?: Function){
    // emit ('Evento' , payload, callback)
    this.socket.emit(evento, payload, callback)
  }
  
  listen(evento:string){
    return this.socket.fromEvent(evento)
  }

  loginws(nombre: string){
    console.log('Configurando el usuario:', nombre)
    this.socket.emit('configurar-usuario', {nombre},(resp:any)=>{
      console.log(resp);
    })
  }
}

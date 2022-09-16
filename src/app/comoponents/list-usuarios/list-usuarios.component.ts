import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  public usuariosActivosObs! : Observable<any>;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.usuariosActivosObs = this.chatService.getUsuariosActivos();
  }

}

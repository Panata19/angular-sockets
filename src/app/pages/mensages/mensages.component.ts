import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-mensages',
  templateUrl: './mensages.component.html',
  styleUrls: ['./mensages.component.css']
})
export class MensagesComponent implements OnInit {

  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
  }

}

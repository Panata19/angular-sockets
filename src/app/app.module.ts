import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.wsUrl , options: {} };

import { AppComponent } from './app.component';
import { FooterComponent } from './comoponents/footer/footer.component';
import { ChatComponent } from './comoponents/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MensagesComponent } from './pages/mensages/mensages.component';
import { ListUsuariosComponent } from './comoponents/list-usuarios/list-usuarios.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    ListUsuariosComponent,
    LoginComponent,
    MensagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

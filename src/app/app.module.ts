import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-modialog';
import { FormsModule } from '@angular/forms'
//import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { LeftnavtabComponent } from './componments/leftnavtab/leftnavtab.component';
import { MycontactComponent } from './componments/mycontact/mycontact.component';
import { MychatComponent } from './componments/mychat/mychat.component';
import { ContactdetailComponent } from './componments/mycontact/contactdetail/contactdetail.component';
import { ChatlistComponent } from './componments/mychat/chatlist/chatlist.component';
import { ChatComponent } from './componments/mychat/chat/chat.component';
import { MyfavoriteComponent } from './componments/myfavorite/myfavorite.component';
import { LoginComponment } from './componments/login/login.component'
import { LogoutComponent } from './componments/logout/logout.componment'
import { MyinfoComponment } from './componments/myInfo/myinfo.component';

import { routing } from './app.routing'
import { RouteGuard } from './services/routeguard.guard';
import { AuthenticateService } from './services/authenticate.server'
import { DemoComponent } from './componments/demo.component'
import {AuthHttp,AuthConfig} from 'angular2-jwt';
import { AuthModule } from './services/http/AuthHttp'

@NgModule({
  declarations: [
    AppComponent,
    LeftnavtabComponent,
    MycontactComponent,
    MychatComponent,
    ContactdetailComponent,
    ChatlistComponent,
    ChatComponent,
    MyfavoriteComponent,
    DemoComponent,
    LoginComponment,
    LogoutComponent,
    MyinfoComponment
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ModalModule.forRoot(),
    //BootstrapModalModule,
    AuthModule,
    FormsModule
  ],
  providers: [RouteGuard,AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

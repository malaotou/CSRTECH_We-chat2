import  { ModuleWithProviders } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import  { MycontactComponent } from "./componments/mycontact/mycontact.component"; 
import  { MychatComponent } from './componments/mychat/mychat.component';
import  { MyfavoriteComponent } from './componments/myfavorite/myfavorite.component';
import  { LoginComponment } from './componments/login/login.component';
import  { ChatComponent } from './componments/mychat/chat/chat.component';
import  { ConfigurationComponent } from './componments/configuration/configuration.component';
import  { ChangePwdComponent } from './componments/configuration/change-pwd/change-pwd.component';
import  { RouteGuard } from './services/routeguard.guard';
import  { MyteamComponent } from './componments/configuration/myteam/myteam.component'
export const routes:Routes=[
    {   path:'mychat',
        component:MychatComponent,
        //canActivate:[RouteguardGuard],
        children:[
            {
                path:'',
                component:MychatComponent,
                children:[
                  
                    {
                        path:':id',
                        component:MychatComponent
                    }
                ]
            },
            {
                path:':id',
                component:MychatComponent
            }
        ]
     },
    {   path:'mycontact',
        component:MycontactComponent
        // ,
        // canActivate:[RouteGuard]
    },
    {   path:'myfavorite',
        component:MyfavoriteComponent//,
        //canActivate:[RouteGuard]
    },
    {
        path:'login',
        component:LoginComponment
    },
    {
        path:'',
        redirectTo:'mycontact',
        pathMatch:'full'
    },
    {
        path:"conf",
        component:ConfigurationComponent,
        children: [
            
            {
                path:"pwd",
                component:ChangePwdComponent
            },
            {
                path:'team',
                component:MyteamComponent

            }
        ]
    },
    {
        path:"**",
        component:MycontactComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{ enableTracing: false } );
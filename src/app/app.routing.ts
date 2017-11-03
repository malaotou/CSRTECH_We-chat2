import  { ModuleWithProviders } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import  { MycontactComponent } from "./componments/mycontact/mycontact.component" 
import  { MychatComponent } from './componments/mychat/mychat.component'
import  { MyfavoriteComponent } from './componments/myfavorite/myfavorite.component'
import  { LoginComponment } from './componments/login/login.component'
import { ChatComponent } from './componments/mychat/chat/chat.component'
import  { RouteGuard } from './services/routeguard.guard';
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
        path:"**",
        component:MycontactComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{ enableTracing: false } );
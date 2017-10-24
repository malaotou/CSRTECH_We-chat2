import  { ModuleWithProviders } from '@angular/core';
import  { Routes, RouterModule } from '@angular/router';
import  { MycontactComponent } from "./componments/mycontact/mycontact.component" 
import  { MychatComponent } from './componments/mychat/mychat.component'
import  { MyfavoriteComponent } from './componments/myfavorite/myfavorite.component'
import  { LoginComponment } from './componments/login/login.component'
import  { RouteguardGuard } from './services/routeguard.guard';
export const routes:Routes=[
    {   path:'mychat',
        component:MychatComponent,
        canActivate:[RouteguardGuard]},
    {   path:'mycontact',
        component:MycontactComponent,
        canActivate:[RouteguardGuard]
    },
    {   path:'myfavorite',
        component:MyfavoriteComponent,
        canActivate:[RouteguardGuard]
    },
    {
        path:'login',
        component:LoginComponment
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
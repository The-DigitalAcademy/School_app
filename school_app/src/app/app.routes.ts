import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ArchiversComponent } from './pages/archivers/archivers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';


export const routes: Routes = [

    {
        path: "",
        title: "home",
        component: HomeComponent,

    },

    { 
        path: "activities",
        title: "activities",
        component: ActivitesComponent,
    },

    {    path:"archivers",
         title: "archivers",
        component: ArchiversComponent,

    },


    {
        path:"contact",
        title: "contact",
        component: ContactComponent,
        
    },
    {
        path:"**",
        title: "error",
        component: ErrorComponent
     },
 

];

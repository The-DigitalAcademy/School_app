import { Routes } from '@angular/router';



import { HomeComponent } from './pages/home/home.component';
import { ActivitesComponent } from './pages/activites/activites.component';
import { ArchiversComponent } from './pages/archivers/archivers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';


import { AboutComponent } from './pages/about/about.component';



export const routes: Routes = [

    {
        path: "",
        title: "/",
        component: HomeComponent,

    },

    { 
        path: "activities",
        title: "activities",
        component: ActivitesComponent,
    },

    {    path:"archivers",
         title: "achievers",
        component: ArchiversComponent,

    },


    {
        path:"contact",
        title: "contact",
        component: ContactComponent,
        
    },
    {
        path: "about", 
        title:"about",
        component: AboutComponent,
    },


    {
        path:"**",
        title: "error",
        component: ErrorComponent,
     },
     
    
];

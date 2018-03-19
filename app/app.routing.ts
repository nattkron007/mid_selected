import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { provinceComponent } from "./province/province.component";


const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/province", 
        pathMatch: "full" 
    },
    {
        path:"province",
        component: provinceComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
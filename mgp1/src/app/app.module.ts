import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HolaMundo } from "./primercomponent/primer.component";
import { TestComponentComponent } from './test-component/test-component.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import { DataService } from "./servicios/data.service";
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    TestComponentComponent,
    UserComponent,
    ListaComentariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
{path: 'crear', component: UserComponent},
{path: 'visualizar', component: TestComponentComponent}
    ])
  ],
  providers: [
DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

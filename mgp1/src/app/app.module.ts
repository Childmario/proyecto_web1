import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaMundo } from "./primercomponent/primer.component";
import { TestComponentComponent } from './test-component/test-component.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundo,
    TestComponentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
{path: 'crear', component: UserComponent},
{path: 'visualizar', component: TestComponentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

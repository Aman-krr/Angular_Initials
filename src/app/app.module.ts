import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//form Module is needed for using ngmodel directive for two way data binding
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CliComponentComponent } from './cli-component/cli-component.component';
import { NewComp1Component } from './new-comp1/new-comp1.component';
import {newComponent2} from './new Comp Manu2/new-Comp2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,ServerComponent, CliComponentComponent, NewComp1Component,newComponent2, DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

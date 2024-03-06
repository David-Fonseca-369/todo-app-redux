import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importamos los formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

//NGRX
//npm i @ngrx/store --save
import { StoreModule } from '@ngrx/store';
import { appReducers } from './todos/app.state';

//npm i @ngrx/store-devtools --save
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//generate environments
// ng g environments

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoModule } from './todos/todo.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,

    //Daba un error al querer asignarle un valor a una propiedad this.todo!.completado = true; y con lo del runtimeChecks, se solucionó
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //Retains last 25 states
      logOnly: environment.production, //Restrict extension to log-only
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

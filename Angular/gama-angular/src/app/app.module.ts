import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from  '@angular/router';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { BoolPipe } from './todo/bool.pipe';
import { AuthModule } from './auth/auth.module';


const routes: Routes = [
  
  { path: '', component: HomeComponent  },
  // { path: 'cep', component: CepTextoComponent  },
  // { path: 'cep/:numero', component: CepComponent  },
  { path: 'contador', component: ContadorComponent  },
  { path: 'contador-botoes', component: ContadorBotoesComponent  },
  { path: 'todos', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)  },
  { path: 'cep', loadChildren: () => import('./cep/cep.module').then(m => m.CepModule)  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},


]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    HomeComponent, 

    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(routes), 
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { VerempComponent } from './pages/veremp/veremp.component';
import { CrearempComponent } from './pages/crearemp/crearemp.component';
import { EditempComponent } from './pages/editemp/editemp.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { VerdepComponent } from './pages/departamentos/verdep/verdep.component';
import { CreardepComponent } from './pages/departamentos/creardep/creardep.component';
import { EditdepComponent } from './pages/departamentos/editdep/editdep.component';
import { CrearemploComponent } from './pages/empleados/crearemplo/crearemplo.component';
import { VeremploComponent } from './pages/empleados/veremplo/veremplo.component';
import { EditemploComponent } from './pages/empleados/editemplo/editemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VerempComponent,
    CrearempComponent,
    EditempComponent,
    PrincipalComponent,
    VerdepComponent,
    CreardepComponent,
    EditdepComponent,
    CrearemploComponent,
    VeremploComponent,
    EditemploComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

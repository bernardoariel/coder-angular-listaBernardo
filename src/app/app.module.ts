import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ItalicDirective } from './directivas/italic.directive';
import { FontWeightDirective } from './directivas/font-weight.directive';
registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    ItalicDirective,
    FontWeightDirective

  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

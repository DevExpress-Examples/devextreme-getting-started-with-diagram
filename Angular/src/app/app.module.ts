import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDiagramModule } from 'devextreme-angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDiagramModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

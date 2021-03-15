import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import the TabModule for the Tab component
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TabModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BasictableComponent } from './basictable/basictable.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material'

@NgModule({
  declarations: [AppComponent, BasictableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

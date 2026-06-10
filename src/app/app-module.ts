import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home/home';
import { CommunityComponent } from './community/community';
import { EventsComponent } from './events/events';
import { BlogComponent } from './blog/blog';
import { VendorsComponent } from './vendors/vendors';
import { ContactComponent } from './contact/contact';
import { NavigationComponent } from './navigation/navigation';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CommunityComponent,
    EventsComponent,
    BlogComponent,
    VendorsComponent,
    ContactComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

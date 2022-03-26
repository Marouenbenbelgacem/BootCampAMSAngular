import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicPipe } from './pipes/topic.pipe';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { FormsModule }   from '@angular/forms';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    TopicPipe,
    HomeComponent,
    NavbarComponent,
    ListProviderComponent,
    AddProviderComponent,
    UpdateProviderComponent,
    DialogConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

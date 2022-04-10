import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProviderComponent} from './add-provider/add-provider.component';
import {ListProviderComponent} from './list-provider/list-provider.component';
import {UpdateProviderComponent} from './update-provider/update-provider.component';
import {DialogConfirmationComponent} from "./dialog-confirmation/dialog-confirmation.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuardService} from "./services/auth-guard.service";


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "app-navbar"},
  {path: "listProvider", component: ListProviderComponent, canActivate: [AuthGuardService]},
  {path: "addProvider", component: AddProviderComponent, canActivate: [AuthGuardService]},
  {path: "updateProvider/:id", component: UpdateProviderComponent, canActivate: [AuthGuardService]},
  {path: "deleteProvider/:id", component: DialogConfirmationComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},
  { path: 'logout', component: LogoutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]})
export class AppRoutingModule {
}

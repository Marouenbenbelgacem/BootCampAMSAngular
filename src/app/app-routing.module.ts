import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProviderComponent} from './add-provider/add-provider.component';
import {ListProviderComponent} from './list-provider/list-provider.component';
import {UpdateProviderComponent} from './update-provider/update-provider.component';
import {DialogConfirmationComponent} from "./dialog-confirmation/dialog-confirmation.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "app-navbar"},
  {path: "listProvider", component: ListProviderComponent},
  {path: "addProvider", component: AddProviderComponent},
  {path: "updateProvider/:id", component: UpdateProviderComponent},
  {path: "deleteProvider/:id", component: DialogConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule {
}

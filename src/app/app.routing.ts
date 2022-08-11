import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

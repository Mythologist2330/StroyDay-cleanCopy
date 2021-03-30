import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthorizationComponent } from "./authorization.component";
import { LoginComponent } from "./components/login/login.component";


@NgModule({
    declarations: [
        AuthorizationComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AuthorizationModule {}
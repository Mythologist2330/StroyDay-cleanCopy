import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthorizationComponent } from "./authorization.component";
import { LoginComponent } from "./components/login/login.component";
import { PasswordComponent } from "./components/password/password.component";


@NgModule({
    declarations: [
        AuthorizationComponent,
        LoginComponent,
        PasswordComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AuthorizationModule {}
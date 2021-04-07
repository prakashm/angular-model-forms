import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DynamicFormBuilderModule } from "./dynamic-form/dynamic-form-builder.module";
import { SharedService } from "./shared.service";
import { CreateappComponent } from "./createapp/createapp.component";
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [AppComponent, HelloComponent, CreateappComponent],
  bootstrap: [AppComponent],
  providers: [SharedService]
})
export class AppModule {}

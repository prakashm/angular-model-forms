import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { SharedService } from "./shared.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any;

  public fields: any[];

  constructor(private sharedService: SharedService) {
    this.fields = sharedService.getControls("usa");
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe(update => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);
  }

  getFields() {
    return this.fields;
  }

  getHeader() {
    return this.fields.filter(a => a.type === "header")[0].value;
  }

  ngDestroy() {
    this.unsubcribe();
  }
}

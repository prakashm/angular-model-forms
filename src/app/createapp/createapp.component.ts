import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-createapp",
  templateUrl: "./createapp.component.html",
  styleUrls: ["./createapp.component.css"]
})
export class CreateappComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  unsubcribe: any;
  private routeSub: Subscription;
  public fields: any[];
  private cntryTyp: number;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.cntryTyp = Number(params["id"]);
      console.log(this.cntryTyp);

      this.fields = sharedService.getControls(this.cntryTyp);

      console.log(this.fields);

      this.form = new FormGroup({
        fields: new FormControl(JSON.stringify(this.fields))
      });

      this.unsubcribe = this.form.valueChanges.subscribe(update => {
        console.log(update);
        this.fields = JSON.parse(update.fields);
      });
    });
  }

  ngOnInit() {
    console.log("Init");
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    console.log("Un Subscribe");
    this.unsubcribe();
  }

  getFields() {
    return this.fields;
  }

  getHeader() {
    return this.fields.filter(a => a.type === "header")[0].value;
  }
}

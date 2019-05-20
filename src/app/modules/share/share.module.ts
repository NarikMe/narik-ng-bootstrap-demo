import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NarikUiNgBootstrapModule } from "narik-ui-ng-bootstrap";
import { NarikSwimlaneDataTableModule } from "narik-ui-swimlane";
import { COMPONENTS } from "./index";

export const PICK_FORMATS = {
  parse: { dateInput: { month: "short", year: "numeric", day: "numeric" } },
  display: {
    dateInput: "input",
    monthYearLabel: { year: "numeric", month: "short" },
    dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
    monthYearA11yLabel: { year: "numeric", month: "long" }
  }
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NarikUiNgBootstrapModule,
    NarikSwimlaneDataTableModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [COMPONENTS]
})
export class ShareModule {}

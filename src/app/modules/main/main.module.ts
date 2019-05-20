import { NarikCommonModule } from "narik-common";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import {
  NarikNgbBusyIndicatorModule,
  NarikNgbButtonModule,
  NarikNgbInputModule
} from "narik-ui-ng-bootstrap";

import { ChangePassComponent } from "./change-password/change-password.component";
import { COMPONENTS } from "./index";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    NarikNgbInputModule,
    NarikNgbButtonModule,
    NarikNgbBusyIndicatorModule,
    NarikCommonModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [ChangePassComponent]
})
export class MainModule {}

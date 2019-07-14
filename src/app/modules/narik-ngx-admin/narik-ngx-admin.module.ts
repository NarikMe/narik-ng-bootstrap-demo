import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {
  NbActionsModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule
} from "@nebular/theme";

import { COMPONENTS } from "./index";
import { NarikNgbTabOutletModule } from "narik-ui-ng-bootstrap";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NbActionsModule,
    NbCardModule,
    NbContextMenuModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbSidebarModule,
    NbIconModule,
    NbUserModule,
    NarikNgbTabOutletModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  providers: [NbSidebarService]
})
export class NarikNgxAdmin {}

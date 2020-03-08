import { NarikBaseTemplate, DynamicForm } from "@narik/core";
import { NarikUiDetailForm } from "@narik/ui-ng-bootstrap";

import { Component, Injector } from "@angular/core";

@DynamicForm("GeneralDetailComponent")
@NarikBaseTemplate("NarikDetailUi")
@Component({
  templateUrl: "general-detail.component.html"
})
export class GeneralDetailComponent extends NarikUiDetailForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}

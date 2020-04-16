import { NarikBaseTemplate, DynamicForm } from "@narik/core";
import { NarikUiEditForm } from "@narik/ui-ng-bootstrap";

import { Component, Injector } from "@angular/core";

@DynamicForm("GeneralEditComponent")
@NarikBaseTemplate("NarikEditUi")
@Component({
  templateUrl: "general-edit.component.html"
})
export class GeneralEditComponent extends NarikUiEditForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}

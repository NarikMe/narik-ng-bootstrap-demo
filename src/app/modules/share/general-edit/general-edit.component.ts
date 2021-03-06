import { DynamicForm } from "@narik/core";
import { NarikUiEditForm } from "@narik/ui-ng-bootstrap";

import { Component, Injector } from "@angular/core";

@DynamicForm("GeneralEditComponent")
@Component({
  templateUrl: "general-edit.component.html",
})
export class GeneralEditComponent extends NarikUiEditForm<any> {
  constructor(injector: Injector) {
    super(injector);
  }
}

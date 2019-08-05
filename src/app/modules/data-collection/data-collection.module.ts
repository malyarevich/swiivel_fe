import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicFieldsService } from "./basic-fields.service";
import { FormService } from "./form.service";
import { FormConstructorComponent } from "./form-constructor/form-constructor.component";
import { ShortTextFieldComponent } from "./form-constructor/filds/short-text-field/short-text-field.component";
import { FormConteinerComponent } from "./form-constructor/form-conteiner/form-conteiner.component";
import { ContentDirective } from "./form-constructor/content.directive";
import { LongTextFieldComponent } from "./form-constructor/filds/long-text-field/long-text-field.component";
import { FormTableComponent } from "./form-table/form-table.component";
import { FormGeneralInfoComponent } from "./form-constructor/form-general-info/form-general-info.component";
import { NumberTextFieldComponent } from "./form-constructor/filds/number-text-field/number-text-field.component";
import { MultipleOptionsFieldComponent } from "./form-constructor/filds/multiple-options-field/multiple-options-field.component";
import { EmailFieldComponent } from "./form-constructor/filds/email-field/email-field.component";
import { DropDownListFieldComponent } from "./form-constructor/filds/drop-down-list-field/drop-down-list-field.component";
import { DateTimeFieldComponent } from "./form-constructor/filds/date-time-field/date-time-field.component";
import { HebrewDateFieldComponent } from "./form-constructor/filds/hebrew-date-field/hebrew-date-field.component";
import { TimeFieldComponent } from "./form-constructor/filds/time-field/time-field.component";
import { PhoneNumberFieldComponent } from "./form-constructor/filds/phone-number-field/phone-number-field.component";
import { FieldsSettingsComponent } from "./form-constructor/fields-settings/fields-settings.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { entryComponents } from "./entryComponents";
import { StoreModule } from "@ngrx/store";
import * as fromForm from "./reducers/forms/form.reducer";
import { EffectsModule } from "@ngrx/effects";
import { FormEffects } from "./reducers/forms/form.effects";
import * as fromField from "./reducers/field/field.reducer";
// import { OnlineFormComponent } from "./online-form/online-form.component";
// import { OnlineFormContainerComponent } from "./online-form/online-form-container/online-form-container.component";
import { DataCollectionComponent } from "./data-collection.component";
import { LabelFieldComponent } from "./form-constructor/filds/label-field/label-field.component";
import { FormNavComponent } from "./form-constructor/form-nav/form-nav.component";
import { EmptyLineFieldComponent } from "./form-constructor/filds/empty-line-field/empty-line-field.component";
import { FormAccessComponent } from "./form-access-modal/form-access/form-access.component";
import { InterceptorsModule } from "../../utils/interceptors/interceptors.module";
import { interceptorsConfig } from "../../app.module";
import { FormAccessModalComponent } from "./form-access-modal/form-access-modal.component";

const formBuilderRoutes: Routes = [
  {
    path: "",
    component: DataCollectionComponent,
    children: [
      { path: "", component: FormTableComponent },
      { path: "generalinfo", component: FormGeneralInfoComponent },
      { path: "formbuilder", component: FormConstructorComponent },
      {
        path: "online-form/:id",
        children: [
          {
            path: "",
            loadChildren: () => import('../online-form/online-form.module').then(m => m.OnlineFormModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    FormConstructorComponent,
    ShortTextFieldComponent,
    FormConteinerComponent,
    ContentDirective,
    LongTextFieldComponent,
    FormTableComponent,
    FormGeneralInfoComponent,
    NumberTextFieldComponent,
    MultipleOptionsFieldComponent,
    EmailFieldComponent,
    DropDownListFieldComponent,
    DateTimeFieldComponent,
    HebrewDateFieldComponent,
    TimeFieldComponent,
    PhoneNumberFieldComponent,
    FieldsSettingsComponent,
    // OnlineFormComponent,
    // OnlineFormContainerComponent,
    DataCollectionComponent,
    LabelFieldComponent,
    FormNavComponent,
    EmptyLineFieldComponent,
    FormNavComponent,
    FormAccessComponent,
    FormAccessModalComponent
  ],
  imports: [
    FormsModule,
    DragDropModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    InterceptorsModule.forRoot(interceptorsConfig),
    RouterModule.forChild(formBuilderRoutes),
    StoreModule.forFeature("form", fromForm.reducer),
    EffectsModule.forFeature([FormEffects]),
    StoreModule.forFeature("field", fromField.reducer)
  ],
  providers: [BasicFieldsService, FormService],
  entryComponents: [entryComponents]
})
export class DataCollectionModule {}

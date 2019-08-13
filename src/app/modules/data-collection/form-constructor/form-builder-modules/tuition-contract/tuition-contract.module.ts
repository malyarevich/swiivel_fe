import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuitionContractSidebarComponent } from "./tuition-contract-sidebar/tuition-contract-sidebar.component";
import { TuitionContractContentComponent } from "./tuition-contract-content/tuition-contract-content.component";
import { TuitionContractComponent } from "./tuition-contract.component";
import { TuitionSplitFeeComponent } from "./tuition-split-fee/tuition-split-fee.component";
import { TuitionSplitStudentComponent } from "./tuition-split-student/tuition-split-student.component";
import { SignatureSidebarModule } from "src/app/shared/components";
import { TuitionStateService } from "./services/tuition-state.service";
import { SectionHeaderModule } from "src/app/shared/components";

@NgModule({
  declarations: [
    TuitionContractSidebarComponent,
    TuitionContractContentComponent,
    TuitionContractComponent,
    TuitionSplitFeeComponent,
    TuitionSplitStudentComponent
  ],
  imports: [CommonModule, SectionHeaderModule, SignatureSidebarModule],
  exports: [TuitionContractSidebarComponent, TuitionContractContentComponent],
  providers: [TuitionStateService]
})
export class TuitionContractModule {}

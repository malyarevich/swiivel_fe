import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuitionContractSidebarComponent } from "./tuition-contract-sidebar/tuition-contract-sidebar.component";
import { TuitionContractContentComponent } from "./tuition-contract-content/tuition-contract-content.component";
import { TuitionSplitFeeComponent } from "./tuition-split-fee/tuition-split-fee.component";
import { TuitionSplitStudentComponent } from "./tuition-split-student/tuition-split-student.component";
import { SignatureSidebarModule } from "src/app/shared/components";
import { SectionHeaderModule } from "src/app/shared/components";
import { TuitionService } from './services/tuition.services';

@NgModule({
  declarations: [
    TuitionContractSidebarComponent,
    TuitionContractContentComponent,
    TuitionSplitFeeComponent,
    TuitionSplitStudentComponent
  ],
  imports: [CommonModule, SectionHeaderModule, SignatureSidebarModule],
  exports: [TuitionContractSidebarComponent, TuitionContractContentComponent],
  providers: [TuitionService],
})
export class TuitionContractModule {}

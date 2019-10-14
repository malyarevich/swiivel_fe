import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SectionHeaderComponent } from "./section-header.component";
import { SharedModule } from '@app/components/shared.module';

@NgModule({
  declarations: [SectionHeaderComponent],
  imports: [CommonModule, NgbModule, SharedModule],
  exports: [SectionHeaderComponent]
})
export class SectionHeaderModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SectionHeaderComponent } from "./section-header.component";

@NgModule({
  declarations: [SectionHeaderComponent],
  imports: [CommonModule, NgbModule],
  exports: [SectionHeaderComponent]
})
export class SectionHeaderModule {}

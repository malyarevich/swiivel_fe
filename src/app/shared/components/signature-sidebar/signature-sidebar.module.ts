import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignatureSidebarComponent } from "./signature-sidebar.component";

@NgModule({
  declarations: [SignatureSidebarComponent],
  imports: [CommonModule, NgbModule],
  exports: [SignatureSidebarComponent]
})
export class SignatureSidebarModule {}

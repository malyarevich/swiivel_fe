import { Injectable } from '@angular/core';
import { ButtonColorsEnum } from '@shared/buttons/buttonColors.enum';

@Injectable({
  providedIn: 'root'
})

export class StatusService {
  getStatusColor(status: string): ButtonColorsEnum {
    switch (status) {
      case 'archived':
        return ButtonColorsEnum.GRAY;
      case 'active':
        return ButtonColorsEnum.GREEN;
      case 'draft':
        return ButtonColorsEnum.LIGHT_BLUE;
      case 'review':
        return ButtonColorsEnum.YELLOW;
      case 'closed':
        return ButtonColorsEnum.GRAY;
      default:
        return ButtonColorsEnum.GRAY;
    }
  }
}

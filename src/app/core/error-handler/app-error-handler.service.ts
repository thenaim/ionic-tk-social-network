import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { ToastService } from '../../services/toast/toast.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(private toastService: ToastService) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (!environment.production) {
      displayMessage += ' See console for details.';
      this.toastService.error(displayMessage);
    }

    super.handleError(error);
  }
}

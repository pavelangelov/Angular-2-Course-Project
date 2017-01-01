import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class Notificator {
  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };
  private successOptions = {
    timeOut: 2000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false,
    maxLength: 10
  };
  private errorOptions = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: false,
    clickToClose: false
  };

  constructor(private notificator: NotificationsService){ }

  showSuccess(title: string, message: string) {
    this.notificator.success(title, message, this.successOptions);
  }

  showError(title: string, message: string) {
    this.notificator.error(title, message, this.errorOptions);
  }
}

import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async presentAlert(opts?: AlertOptions): Promise<HTMLIonAlertElement> {
    return await this.alertController.create(opts);
  }
}

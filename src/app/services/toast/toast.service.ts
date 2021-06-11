import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  public async default(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'default',
    });
    await toast.present();
  }

  public async info(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'info',
    });
    await toast.present();
  }

  public async success(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'success',
    });
    await toast.present();
  }

  public async warn(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'warn',
    });
    await toast.present();
  }

  public async error(message: string, duration: number = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      cssClass: 'error',
    });
    await toast.present();
  }
}

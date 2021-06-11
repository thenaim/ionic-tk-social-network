import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = false;

  constructor(private loadingController: LoadingController) {}

  public async showLoading() {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    return await loading.present();
  }

  public async hideLoading() {
    this.isLoading = false;
    const getTopLoading = await this.loadingController.getTop();
    return getTopLoading.dismiss();
  }
}

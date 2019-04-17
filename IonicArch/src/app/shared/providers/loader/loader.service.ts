import { Injectable } from '@angular/core';
import { LoadingController,  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader: any;

  constructor(public loadingController: LoadingController) {}

  async showLoader(msg?: string) {
    if (!this.loader) {
        this.loader = await this.loadingController.create({
            message: msg ? msg : 'Please wait...'
        });
        await this.loader.present();
    }
  }

  hideLoader() {
    if (this.loader) {
        this.loader.dismiss();
        this.loader = null;
    }
  }
}

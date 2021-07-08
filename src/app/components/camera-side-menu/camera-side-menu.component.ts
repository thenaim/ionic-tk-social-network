import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-camera-side-menu',
  templateUrl: './camera-side-menu.component.html',
  styleUrls: ['./camera-side-menu.component.scss'],
})
export class CameraSideMenuComponent implements OnInit {
  isCameraStart = false;
  isCameraFront = false;
  isCameraFlashMode = true;
  cameraFocusPosition = {
    top: 0,
    left: 0,
    show: false,
  };

  constructor(private menuController: MenuController) {}

  openCameraSettings(event: Event) {
    event.stopPropagation();
    event.preventDefault();
  }

  closeCameraSideMenu(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.menuController.toggle('camera');
  }

  onOpenCameraMenu(event) {
    this.isCameraStart = true;
  }

  onCloseCameraMenu(event) {
    this.isCameraStart = false;
  }

  switchCamera(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('switchCamera');
  }

  takePicture(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('takePicture');
  }

  switchFlashMode(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log('switchFlashMode');
    this.isCameraFlashMode = !this.isCameraFlashMode;

    console.log('isCameraFlashMode', this.isCameraFlashMode);
  }

  async getCameraFocusCoordinates(event) {
    this.cameraFocusPosition.top = event.y - 15;
    this.cameraFocusPosition.left = event.x - 15;

    this.cameraFocusPosition.show = false;

    setTimeout(() => {
      this.cameraFocusPosition.show = true;
    });

    console.log(this.cameraFocusPosition);
  }

  ngOnInit() {}
}

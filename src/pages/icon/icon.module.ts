import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconPage } from './icon';

@NgModule({
  declarations: [
    IconPage,
  ],
  imports: [
    IonicPageModule.forChild(IconPage),
  ],
  exports: [
    IconPage
  ]
})
export class IconPageModule {}

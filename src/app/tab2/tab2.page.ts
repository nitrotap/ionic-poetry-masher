import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemReorderEventDetail } from '@ionic/angular';
import { IonCheckbox, IonLabel } from '@ionic/angular';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

import { FooterComponent } from '../footer/footer.component';






@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, FooterComponent]
})
export class Tab2Page {


  // textInput: string = '';
  textInput: string = `Olive the dog, oh what a sight,
  With fur as soft as a cloud in flight.
  Her wagging tail and playful bark,
  Could light up even the dreariest of dark.
  
  She's always ready for a game,
  Fetching a ball, she's never lame.
  She'll run and jump, and never tire,
  Her energy could never expire.
  
  But when the day is done and night draws near,
  Olive will cuddle up, she has no fear.
  For she knows that she's loved and adored,
  And her family will always be there to afford.
  
  Olive, the faithful and loyal friend,
  A companion that will stick to the end.
  Through thick and thin, she'll be by your side,
  A dog like Olive, is hard to find.
  `;

  parsedLines: string[] = [];
  randomizedLines: string[] = [];

  isChecked: boolean[] = [];
  checkedValues: string[] = [];

  onCheckboxChange(event: any, item: any) {
    if (event.detail.checked) {
      // console.log(item + ' is checked.');
      this.checkedValues.push(item)
      // console.log(this.checkedValues)
    } else {
      console.log(item + ' is unchecked.');
      this.checkedValues = this.checkedValues.filter(text => text !== item)
      console.log(this.checkedValues)
    }
  }


  getCheckedValue() {
    // console.log(this.isChecked)
    let a = this.isChecked;
    console.log(a)


  }

  async saveArrayToFileSystem(array: any[]) {
    // Get the date and time to use as the filename
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const filename = `${year}${month}${day}_${hours}${minutes}${seconds}.txt`;


    // Convert the array to a string
    const text = JSON.stringify(array);

    // Check if the app has permission to write to the filesystem
    const permission = await Filesystem.requestPermissions();
    if (permission.publicStorage === 'granted') {
      // Save the file to the app's public storage directory
      const result = await Filesystem.writeFile({
        path: filename,
        data: text,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });

      // Save the filename to the app's preferences
      await Preferences.set({
        key: 'filename',
        value: result.uri
      });

      console.log(`File saved to ${result.uri}`);
    } else {
      console.log('Permission to write to filesystem denied');
    }
  }



  // async saveStanza() {


  //   await Filesystem.requestPermissions();

  //   await Filesystem.checkPermissions();





  //   if (this.checkedValues.length === 0) {
  //     const alert = await this.toastController.create({
  //       message: 'Error! Stanza not saved. No checked lines.',
  //       duration: 2000,
  //       position: 'bottom',
  //       color: 'danger'

  //     });
  //     await alert.present();

  //   } else {
  //     try {

  //       await this.saveArrayToFileSystem(this.checkedValues)
  //       const alert = await this.toastController.create({
  //         message: 'Stanza saved',
  //         duration: 2000,
  //         position: 'bottom',
  //         color: 'success'

  //       });
  //       await alert.present();
  //     } catch (error) {
  //       const alert = await this.toastController.create({
  //         message: 'Error! Stanza not saved. No checked lines. or ' + error,
  //         duration: 2000,
  //         position: 'top',
  //         color: 'danger'

  //       });
  //       await alert.present();

  //     }
  //   }
  // }

  // async saveStanza() {
  //   try {
  //     // Request permission
  //     await Filesystem.requestPermissions();

  //     // Check permission
  //     const permissionResult = await Filesystem.checkPermissions();
  //     if (permissionResult.publicStorage === 'granted') {
  //       // Permission granted, proceed with saving stanza
  //       if (this.checkedValues.length === 0) {
  //         const alert = await this.toastController.create({
  //           message: 'Error! Stanza not saved. No checked lines.',
  //           duration: 2000,
  //           position: 'bottom',
  //           color: 'danger'
  //         });
  //         await alert.present();
  //       } else {
  //         await this.saveArrayToFileSystem(this.checkedValues);
  //         const alert = await this.toastController.create({
  //           message: 'Stanza saved',
  //           duration: 2000,
  //           position: 'bottom',
  //           color: 'success'
  //         });
  //         await alert.present();
  //       }
  //     } else {
  //       // Permission denied
  //       const alert = await this.toastController.create({
  //         message: 'Error! Stanza not saved. Permission denied.',
  //         duration: 2000,
  //         position: 'top',
  //         color: 'danger'
  //       });
  //       await alert.present();
  //     }
  //   } catch (error) {
  //     // Handle other errors
  //     const alert = await this.toastController.create({
  //       message: 'Error! Stanza not saved. ' + error,
  //       duration: 2000,
  //       position: 'top',
  //       color: 'danger'
  //     });
  //     await alert.present();
  //   }
  // }

  async saveStanza() {
    try {
      // Request permission
      await Filesystem.requestPermissions();

      // Check permission
      const permissionResult = await Filesystem.checkPermissions();
      if (permissionResult.publicStorage === 'granted') {
        // Permission granted, proceed with saving stanza
        if (this.checkedValues.length === 0) {
          const alert = await this.toastController.create({
            message: 'Error! Stanza not saved. No checked lines.',
            duration: 2000,
            position: 'bottom',
            color: 'danger'
          });
          await alert.present();
        } else {
          await this.saveArrayToFileSystem(this.checkedValues);
          const alert = await this.toastController.create({
            message: 'Stanza saved',
            duration: 2000,
            position: 'bottom',
            color: 'success'
          });
          await alert.present();
        }
      } else {
        // Permission denied or not requested
        const alert = await this.toastController.create({
          message: 'Error! Stanza not saved. Permission denied. This app needs permission to write to the filesystem to save and view saved stanzas. If permission is denied twice, please go to Settings > Apps > Poem Line Mash > Permissions > Files and Media > Allow Access.',
          duration: 5000,
          position: 'top',
          color: 'danger'
        });
        await alert.present();
      }
    } catch (error) {
      // Handle other errors
      const alert = await this.toastController.create({
        message: 'Error! Stanza not saved. ' + error,
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      await alert.present();
    }
  }




  constructor(
    private toastController: ToastController
  ) {

  }

  parseInput() {
    this.parsedLines = this.textInput.split('\n');
  }

  randomizeLines() {
    // Split the input text into separate lines and remove empty lines
    const lines = this.textInput.split('\n').filter(line => line.trim() !== '');

    // Shuffle the lines using the Fisher-Yates algorithm
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }

    // Update the randomizedLines property with the shuffled lines
    // console.log(lines)
    this.randomizedLines = lines;
  }

  updateLines() {
    // Split the input text into separate lines and remove empty lines
    const lines = this.textInput.split('\n').filter(line => line.trim() !== '');
    this.randomizedLines = lines;
  }




  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  handleReorderSaved(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();

    // // update checkedValues array with order of saved stanzas
    // let a = this.checkedValues[ev.detail.from];
    // let b = this.checkedValues[ev.detail.to];
    // this.checkedValues[ev.detail.from] = b;
    // this.checkedValues[ev.detail.to] = a;

    // Update checkedValues array with order of saved stanzas
    let a = this.checkedValues[ev.detail.from];
    let b = this.checkedValues[ev.detail.to];

    // Check if indices are within bounds
    if (ev.detail.from < 0 || ev.detail.from >= this.checkedValues.length ||
      ev.detail.to < 0 || ev.detail.to >= this.checkedValues.length) {
      console.error("Error: Indices are out of bounds.");
      return;
    }

    // Move elements down in the array
    if (ev.detail.from < ev.detail.to) {
      for (let i = ev.detail.from; i < ev.detail.to; i++) {
        this.checkedValues[i] = this.checkedValues[i + 1];
      }
    } else if (ev.detail.from > ev.detail.to) {
      for (let i = ev.detail.from; i > ev.detail.to; i--) {
        this.checkedValues[i] = this.checkedValues[i - 1];
      }
    } else {
      // Indices are equal, no need to move elements
      console.error("Error: Indices are equal.");
      return;
    }

    // Insert the value at the target index
    this.checkedValues[ev.detail.to] = a;

    console.log(this.checkedValues);

  }


  logToConsole(text: string) {
    console.log(text)
  }

  ngOnInit() {
    this.randomizeLines();
  }


}

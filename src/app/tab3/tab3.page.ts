import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { CommonModule } from '@angular/common';



import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, FooterComponent],
})
export class Tab3Page {
  savedFiles: string[] = [];
  fileNames: string[] = [];
  loadedArray: string[][] = [];
  parsedArray: string[][] = [];



  async getFiles() {
    const files = await Filesystem.readdir({
      directory: Directory.Documents,
      path: ''
    })

    console.log(files.files)

    files.files.map((element) => {
      console.log(element.name)
      this.fileNames.push(element.name)
    })
  }



  async deleteStanza(stanza: any) {
    // console.log(stanza)

    const files = await Filesystem.readdir({
      directory: Directory.Documents,
      path: ''
    })


    // console.log(files.files)
    const index = this.loadedArray.indexOf(stanza);
    // console.log(index)
    // console.log(files.files[index].name)

    await Filesystem.deleteFile({
      directory: Directory.Documents,
      path: files.files[index].name
    });

    this.ionViewDidEnter();

    const alert = await this.toastController.create({
      message: 'Stanza deleted',
      duration: 2000,
      position: 'bottom',
      color: 'danger'

    });

    await alert.present();

  }



  async ionViewDidEnter() {
    this.loadedArray = []
    const folderPath = Directory.Documents;
    const files = await Filesystem.readdir({ directory: folderPath, path: '' });


    for (const file of files.files) {
      const contents = await Filesystem.readFile({
        directory: Directory.Documents,
        path: file.name,
        encoding: Encoding.UTF8
      });
      const savedArray = JSON.parse(contents.data) as string[];
      this.loadedArray.push(savedArray);
    }
  }





  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

}

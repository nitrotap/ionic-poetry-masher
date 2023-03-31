import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {
  savedFiles: string[] = [];
  fileNames: string[] = [];
  loadedArray: string[][] = [];



  async getFiles() {
    const files = await Filesystem.readdir({
      directory: Directory.Documents,
      path: ''
    })

    console.log(files.files)

    files.files.map((element)=>{
      console.log(element.name)
      this.fileNames.push(element.name)
    })
  }
  


// Load an array from a file
async loadArrayFromFile(fileName: string) {
  const data = await Filesystem.readFile({
    directory: Directory.Documents,
    path: fileName,
    encoding: Encoding.UTF8
  });
  // console.log(JSON.parse(data.data))
  return JSON.parse(data.data);
}

async loadAllArrays() {
  await this.getFiles()
  let stanzas: any = [];

  stanzas = this.fileNames.map((element) => {
    stanzas.push(this.loadArrayFromFile(element))
    console.log(stanzas)
  })




}

  async ionViewDidEnter() {
    this.loadedArray = []
    const folderPath = Directory.Documents;
    const files = await Filesystem.readdir({directory: folderPath, path: ''});
    

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


  constructor() {}

}

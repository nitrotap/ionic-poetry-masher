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
  stanzas: string[] = [];
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

  // console.log(this.fileNames)

  // this.fileNames.map((element)=> {
  //   console.log(element)
  //   const files = this.loadArrayFromFile(element)
  //   console.log(files)
  // })

  let b: any = [];

  const a = await this.loadArrayFromFile(this.fileNames[0])
  console.log(a)

  b = this.fileNames.map((element) => {
    b.push(this.loadArrayFromFile(element))
    console.log(b)
  })




}


// // Load all arrays from files in the documents directory
// async loadAllArrays() {
//   const files = await this.getFiles();
//   const arrays: any[][] = [];
//   let b;

//   console.log(files.files[0].name)
//   this.loadArrayFromFile(files.files[0].name)

//   const a = files.files.forEach(element => {
//     // console.log(element.name) // filename
//     b = this.loadArrayFromFile(element.name)
//     console.log(b)
    
//   });


 
  


//   // for (let file of files.files) {
//   //   const array = await this.loadArrayFromFile(file);
//   //   arrays.push(array);
//   // }

//   return arrays;
// }


  


  // ngOnInit() {
  //   this.loadAllArrays()
    

  // }

  async ngOnInit() {
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

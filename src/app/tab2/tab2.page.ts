import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemReorderEventDetail } from '@ionic/angular';
import { IonCheckbox, IonLabel } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, CommonModule]
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
      console.log(item + ' is checked.');
      this.checkedValues.push(item)
      console.log(this.checkedValues)
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


  constructor() {

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

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }


  logToConsole(text: string) {
    console.log(text)
  }

}

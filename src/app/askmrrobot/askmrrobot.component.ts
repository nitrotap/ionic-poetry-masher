import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { Configuration, OpenAIApi } from "openai";

@Component({
  selector: 'app-askmrrobot',
  templateUrl: './askmrrobot.component.html',
  styleUrls: ['./askmrrobot.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],

})


export class AskmrrobotComponent implements OnInit {
  userText: string = "";
  robotText: any;

  configuration: Configuration = new Configuration({
    organization: environment.openai.OPENAI_ORG_ID,
    apiKey: environment.openai.OPENAI_API_KEY,
  });


  async getRobotText() {
    const openai = new OpenAIApi(this.configuration);
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "write a one line poem about" + this.userText,
        temperature: 0.6,
        max_tokens: 20,
      });

      // console.log(completion)
      // console.log(completion.data.choices[0].text)

      this.robotText = completion.data.choices[0].text;

    } catch (error) {
      console.log(error)
    }
  }





  constructor() { }

  ngOnInit() {

  }







}

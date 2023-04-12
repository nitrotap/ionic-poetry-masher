import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { environment } from 'src/environments/environments';
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
      // const completion = await openai.createCompletion({
      //   model: "text-davinci-003",
      //   prompt: "write a one line poem about" + this.userText,
      //   temperature: 0.6,
      //   max_tokens: 20,
      // });

      // this.robotText = completion.data.choices[0].text;



      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: 'write a one line poem about ' + this.userText },
        ],
        temperature: 0.6,
        max_tokens: 100,
        frequency_penalty: 2.0,
        presence_penalty: 2.0,
      });


      this.robotText = completion.data.choices[0].message?.content;


    } catch (error) {
      console.log(error)
    }
  }





  constructor() { }

  ngOnInit() {

  }







}

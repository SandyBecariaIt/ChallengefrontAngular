import { Component, OnInit } from '@angular/core';
import { GetInformationService } from '../../Services/get-information.service';
import { IDataPost } from '../Interfaces/IDataPost';
import { IDataChange } from '../Interfaces/dataChamge';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  date: Date;
  newDate: string;
  totalCost: number;
  data: IDataPost;
  numbers: number[];
  time: string;
  result: any;

  constructor(private service: GetInformationService) {
    this.date = new Date();
    this.newDate = "";
    this.totalCost = 0;
    this.numbers = [];
    this.time = "";
    this.result;
  }

  ngOnInit() {
    if(this.date.getHours() < 10)
      this.newDate = "0" + this.date.getHours();
    else
    this.newDate = this.date.getHours() + "";
    if(this.date.getMinutes() < 10)
      this.newDate += ":0"+this.date.getMinutes();
    else
      this.newDate += ":"+this.date.getMinutes();
    console.log(this.newDate);
  }

  saveInformation(formData: any){
    console.log(this.time);
    var array = [1,2,10,50,100];
    var data: IDataPost = {
      currentTime: this.newDate,
      finalTime: this.time,
      cost: 0
    }

  this.numbers[0] = formData.one;
  this.numbers[1] = formData.two;
  this.numbers[2] = formData.ten;
  this.numbers[3] = formData.fifty;
  this.numbers[4] = formData.oneHundred;

  for(var count=0; count < this.numbers.length; count++){
    if(this.numbers[count] != null) {
      data.cost +=  this.numbers[count]*array[count];
    }
  }
  this.result = this.service.returnChange(data);
  console.log('Result',this.result);
  }

}

import { Component, OnInit } from '@angular/core';
import { GetInformationService } from '../../Services/get-information.service';
import { IDataCoin } from '../Interfaces/DataCoin';

@Component({
  selector: 'app-quantity-money',
  templateUrl: './quantity-money.component.html',
  styleUrls: ['./quantity-money.component.css']
})
export class QuantityMoneyComponent implements OnInit {
  data: IDataCoin[] = [];
  constructor(private serviceClient: GetInformationService) {
    
   }

  ngOnInit() {
    this.serviceClient.getInformation().subscribe(result => {
      this.data.push(result);
      console.log('data',this.data);
    });
  }

}

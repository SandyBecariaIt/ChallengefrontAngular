import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDataCoin } from '../app/Interfaces/DataCoin';
import { IDataChange } from '../app/Interfaces/dataChamge';
import { IDataPost } from 'src/app/Interfaces/IDataPost';

@Injectable({
  providedIn: 'root'
})
export class GetInformationService {
  data: IDataCoin[] = [];
  change: IDataChange;

  constructor(private http:HttpClient) {
   
  }

   getInformation(){
    return this.http.get<IDataCoin>('http://localhost:3000/money/getInformation');
   }

   returnChange(body: IDataPost) {
    
      this.http.post<IDataChange>('http://localhost:3000/data/editData',body)
      .subscribe(data => {
        console.log(data);
         this.change = data;
         
         return this.change;
      });
   }

}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MATERIAL_MODULE } from '../../const/material';

@Component({
  selector: 'app-matconfirmatioin',
  imports: [MATERIAL_MODULE],
  templateUrl: './matconfirmatioin.html',
  styleUrl: './matconfirmatioin.scss',
})
export class Matconfirmatioin {

  constructor(private _MatdiaRef:MatDialogRef<Matconfirmatioin>){}


 OnClose(flag:boolean){
    this._MatdiaRef.close(flag)
  }
}

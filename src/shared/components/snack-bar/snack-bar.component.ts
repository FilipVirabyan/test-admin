import { Component, OnInit, Inject } from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import { IMessage } from 'core/models';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: IMessage, 
  private _snackBarRef: MatSnackBarRef<SnackBarComponent>) { }

  ngOnInit(): void {
  }

  closeSnackbar(){
    this._snackBarRef.dismiss()
  }

}

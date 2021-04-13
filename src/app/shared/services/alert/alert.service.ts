import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {  
  constructor(
    private _alert: MatSnackBar
  ) { }

  showAlert(msg: string, tipo: string){
    this._alert.open(msg, 'fechar', {
      duration: 2000,
      panelClass: [tipo]
    });
  }
}

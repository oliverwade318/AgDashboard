import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

/**
 * A class for standardizing alerts
 */

@Injectable({
  providedIn: 'root'
})

export class CustomAlert {

  constructor(private _snackBar: MatSnackBar) { }

  errorMessage(message: string = null, action: string = 'Erro', duration = 5000): MatSnackBarRef<any> {
    if (!message)
      message = 'O sistema está indisponível, tente mais tarde!'
    return this._snackBar.open(message, action, { duration: duration });
  }

  okMessage(message: string, action: string, duration = 3000): MatSnackBarRef<any> {
    return this._snackBar.open(message, action, { duration: duration });
  }
}

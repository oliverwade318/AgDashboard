import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { User } from "../../shared/models/user.model";

@Injectable({providedIn: 'root'})
export class LoginService{

  constructor(private httpClient: HttpClient){ }

  login(user: User): Observable<any>{

    return this.httpClient.post(`${environment.apiUrl}/login`, user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { of as observableOf, Observable } from 'rxjs';

export interface RegisterResponse {
  success: boolean;
  msg: string;
  BBid:string;
}

export interface UserResponse {
  success: boolean;
  msg: string;
  users:[];
}

@Injectable({
  providedIn: 'root'
})

export class MyappService {
  private SERVER_URL = "http://localhost:4200";
  constructor(private httpClient: HttpClient) { }

  /* public get(){  
		return this.httpClient.get(this.SERVER_URL);  
  }
   */
    findAllUsers():Observable<UserResponse>{
    let ep='http://localhost:3000/users/all';
    return this.httpClient.get<UserResponse>(ep).pipe(map(res=>res));
  }

  adduser(user):Observable<UserResponse>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/users/register';
    return this.httpClient.post<UserResponse>(ep,user,{ headers: headers }).pipe(map(res => res));
  }
  
  signin(user):Observable<UserResponse>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/users/authenticate';
    return this.httpClient.post<UserResponse>(ep,user,{ headers: headers }).pipe(map(res => res));
  }  

  findAllBBid():Observable<RegisterResponse>{
    let ep='http://localhost:3000/BBIDs/all';
    return this.httpClient.get<RegisterResponse>(ep).pipe(map(res=>res));
  }

  addBBid(bbid):Observable<RegisterResponse>{
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/BBIDs/add';
    console.log("Its comes to myapp.service.ts");
    return this.httpClient.post<RegisterResponse>(ep,bbid,{ headers: headers }).pipe(map(res => res));
  }
/* 
  addUserOnDev(userOne){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let ep = 'http://localhost:3000/sensor/add';
    return this.httpClient.post(ep,userOne,{ headers: headers }).pipe(map(res => res));
  }

  DisplayOneUser(){
    let ep = 'http://localhost:3000/sensor/all';
    return this.httpClient.get(ep).pipe(map(res=>res));
  }
 */}

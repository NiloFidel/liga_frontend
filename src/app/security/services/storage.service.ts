import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  key="123";
  constructor(
    private cookieService:CookieService
  ) { }

  public setToken(key:string, value:string){
    //this.hola.set(key,this.encrypt(value));
    this.cookieService.set(key, value);
  }
  public getToken(key:string){
    let token = this.cookieService.get(key);
    //return this.decrypt(token);
    return this.cookieService.get(key);
  }
  public getAllToken(){
    let allToken = this.cookieService.getAll();
    return allToken;
  }
  public deleteToken(key:string){
    this.cookieService.delete(key);
  }
  public deleteAllToken(){
    this.cookieService.deleteAll();
  }
  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }
  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
  // public saveData(key: string, value: string) {
  //   localStorage.setItem(key, this.encrypt(value));
  // }
  // public getData(key: string) {
  //   let data = localStorage.getItem(key)|| "";
  //   return this.decrypt(data);
  // }
  // public removeData(key: string) {
  //   localStorage.removeItem(key);
  // }
  // public clearData() {
  //   localStorage.clear();
  // }
}
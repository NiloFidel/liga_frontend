import { Component, OnInit } from '@angular/core';
import { SecurityService } from './../services/security.service';
import { Router } from '@angular/router';
import { StorageService } from './../services/storage.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  username!: string;
  email!: string;
  password!: string;
  login_success!: boolean;

  constructor(
    public securityService: SecurityService,
    public storageService: StorageService,
    public router: Router
  ) { }

  login() {
    //const user = { username: this.username, email: this.email, password: this.password };
    this.securityService.login(this.form.value).subscribe(data => {
      try {
        this.login_success = true;
        this.storageService.setToken("access_token",data.access_token);
        this.storageService.setToken("refresh_token",data.access_token);
        this.storageService.setToken("logedIn", "true");
        this.storageService.setToken("username",data.user.username);
        this.router.navigateByUrl('/hola');
      } catch (error) {
        this.login_success = false;
      }
    })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      password: new FormControl('', Validators.required)
      });
  }
  get function_low(){
    return this.form.controls;
  }
}

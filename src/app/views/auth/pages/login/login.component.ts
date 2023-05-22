import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseHandler, Utilities } from 'core/helpers';
import { GeneralResponse, IUser } from 'core/models';
import { AuthService } from 'core/services';
import { ProfileService, StorageService } from 'shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  errMessage?:string;

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _storageService: StorageService,
              private _profileService: ProfileService,
              private _authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this._authService.login(this.loginForm.getRawValue())
    .subscribe(
      (user: GeneralResponse<IUser, string>)=>{
        this._storageService.token = user.data.email;
        const userWithRole = {...user.data, role: Utilities.getRandomRole()};
        
        ResponseHandler.updateUser(userWithRole, user.data.id)
        this._router.navigate(['home'])
      },
      (err: GeneralResponse<null, string>)=>{
        this.errMessage = err.metadata;
      }
    )
  }

}

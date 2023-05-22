import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { URL_REGEXP } from 'core/constants';
import { GeneralResponse, IUser } from 'core/models';
import { UserService } from 'core/services/user.service';
import { ProfileService, MessageService } from 'shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [{ value: '', disabled: true }],
    phone: ['', Validators.required],
    url: ['', [Validators.pattern(URL_REGEXP)]]
  });
  private _userId!:number;

  constructor(
    private _fb:FormBuilder,
    private _profileService: ProfileService,
    private _messageService: MessageService,
    private _userService: UserService
    ) { }

  ngOnInit(): void {
    this._setProfileForm()
  }

  private _setProfileForm(){
    const user =  this._profileService.profile$.getValue()
    this._userId = user.id;
    this.profileForm.patchValue(user)
  }

  submitForm(){
    this._userService.updateUser(this.profileForm.value, this._userId)
    .subscribe(
        (resp:GeneralResponse<IUser, string>)=>{
        this._showMessage(resp)
        this._profileService.profile$.next(resp.data)
      },
      (resp:GeneralResponse<IUser, string>)=>{
        this._showMessage(resp)
      }
    ) 
  }

  private _showMessage(resp:GeneralResponse<IUser, string>){
    this._messageService.message.next(
      {
      message: resp.metadata,
      type: resp.status
    })
  }
}

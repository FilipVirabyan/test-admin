import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { MessageService, ProfileService } from 'shared';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'shared/components/snack-bar/snack-bar.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output('showMenu') showMenu: EventEmitter<null> = new EventEmitter();
  private _subs$:Subject<void> = new Subject()

  constructor(private _messageService: MessageService,
              public _profileService: ProfileService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listenMessages()
  }

  listenMessages(){
    this._messageService.message
    .pipe(takeUntil(this._subs$))
    .subscribe(
      message => {
          this._snackBar.openFromComponent(SnackBarComponent, {
            data:message, 
            panelClass: [message.type, 'snack-message'],
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 30000
          });
        }
    );
  }

  ngOnDestroy(){
    this._subs$.next()
    this._subs$.complete()
  }
}

import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component'

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    declarations: [
      SnackBarComponent
    ]
})
export class SharedModule { }

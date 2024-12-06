import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserInputComponent} from './user-input.component';

@NgModule({
  declarations: [UserInputComponent],
  imports:[FormsModule, ReactiveFormsModule],
  exports: [UserInputComponent]
})
export class UserInputModule{
}

import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = new FormControl('');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  updateProfile() {
    // this.name.setValue('Nancy');

    this.profileForm.controls['firstName'].addValidators([Validators.required]);
    this.profileForm.controls['firstName'].updateValueAndValidity();
    this.profileForm.controls['firstName'].setValue('saurabh');
    this.profileForm.patchValue({
      firstName: 'Saurabh',
      lastName: 'Dubey',
    });
    console.log(this.profileForm);
  }
}

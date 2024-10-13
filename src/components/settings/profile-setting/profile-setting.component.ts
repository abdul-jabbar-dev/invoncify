import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css'],
})
export class ProfileSettingComponent {
  profileInfo = new FormGroup({
    displayName: new FormControl<string>(''),
    company: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phoneNumber: new FormControl<string>(''),
    address: new FormControl<string>(''),
    photoURL: new FormControl<string>(
      'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg'
    ),
  });

  onSubmit() {
    console.log(this.profileInfo.value);
  }

  clearImage() {
    this.profileInfo.get('photoURL')?.setValue(''); // Clear the image URL
  }
}

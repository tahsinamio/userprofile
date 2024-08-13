import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  name: string = '';
  email: string = '';
  bio: string = '';
  counter: number = 0;

  reset() {
    this.name = '';
    this.email = '';
    this.bio = '';
  }

  save() {
    console.log('Saving profile', this.name, this.email, this.bio);
    this.counter++;
  }

  areAllFieldsEmpty(): boolean {
    return !this.name && !this.email && !this.bio;
  }
}

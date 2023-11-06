import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input() user: any;
  name: string = '';
  email: string = '';
  imageUrl = 'https://pixabay.com/get/g4988ac51802c4b8d0a3877f1d621898e369d66f8ba20a353240e6ca4ea6489a1b124b2dd7d9ee70249238e42e88ea710_1280.png';

  ngOnInit(): void {
    this.name = this.user.name
    this.email = this.user.email
  }
}

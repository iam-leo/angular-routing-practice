import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  name: string = '';
  email: string = '';
  gender: string = '';
  status: string = '';
  imageUrl = 'https://pixabay.com/get/g4988ac51802c4b8d0a3877f1d621898e369d66f8ba20a353240e6ca4ea6489a1b124b2dd7d9ee70249238e42e88ea710_1280.png';

  constructor( private actRoute: ActivatedRoute, private _usersService: UsersService) {
    this.id = +this.actRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
     this.getUser(this.id);
   }

   getUser(id: number){
    this._usersService.getUserDetails(id).subscribe(data => {
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.status = data.status;
    })
   }


}

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

  constructor( private actRoute: ActivatedRoute, private _usersService: UsersService) {
    this.id = +this.actRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
     this.getUser(this.id)
   }

   getUser(id: number){
    this._usersService.getUserDetails(id).subscribe(data => {
      console.log(data)
    })
   }


}

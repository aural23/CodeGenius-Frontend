import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent {
  listData: any;
  constructor(private _router: Router, private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(
      (data) => {
        this.listData = data;
      },
      (error) => {
        console.log('Error fetching table data:', error);
      }
    );
  }

  // searchText:string=''
  // phoneNum:any=[{
  //   name:'user1',
  //   num:'21312312312312',
  //   adress:'lll,asdasda'
  // },
  // {
  //   name:'user2',
  //   num:'21312312312312',
  //   adress:'lll,asdasda'
  // },
  // {
  //   name:'user3',
  //   num:'21312312312312',
  //   adress:'lll,asdasda'
  // },
  // {
  //   name:'user4',
  //   num:'21312312312312',
  //   adress:'lll,asdasda'
  // }]

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title = 'codegenius-frontend';

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

  // getUser(){
  //   this._userService.getUser()
  //   .subscribe(
  //     data => {console.log(data); //this._router.navigate(['/login']);
  //   },
  //     error=> console.error(error)
  //   );
  // }
}

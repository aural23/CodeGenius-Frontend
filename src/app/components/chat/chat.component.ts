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
  imgProfilePicture: string;
  strNombre: String;

  listData: any;
  chatHistory: any;
  strTextToSend: String;
  strCurrentChat: String;
  strCurrentUser: String;


  constructor(private _router: Router, private _userService: UserService) {
    this.imgProfilePicture = "";
    this.strNombre = "";
    this.strCurrentChat = "";
    this.strTextToSend = "";
    this.strCurrentChat = "";
    this.strCurrentUser = ""
  }

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

  loadChat(id: String) {

    this.strCurrentUser = id;
    this._userService.getUser(id)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.imgProfilePicture = "./assets/img/" + response.name + ".jpg";
          this.strNombre = response.name;


          this._userService.getChat("64af5036d298092368817d73", response._id)
            .subscribe(
              (chat: any) => {
                //console.log(chat);
                this.strCurrentChat = chat._id;
                this._userService.getChatDetail(chat._id)
                  .subscribe(
                    (detail: any) => {
                      //console.log(detail);
                      this.chatHistory = detail;
                    },
                    error => console.error(error)
                  );
              },
              error => console.error(error)
            );


        },
        error => console.error(error)
      );



  }

  updateText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.strTextToSend = target.value;
  }


  sendComment() {
    console.log(this.strTextToSend.toString());
    if (this.strTextToSend.toString() != "") {
      var obj = {
        "chat_id": this.strCurrentChat,
        "group_id": -1,
        "user_id": this.strCurrentUser,
        "chat_text": this.strTextToSend
      }
      console.log(obj);
      this._userService.postComment(JSON.stringify(obj))
        .subscribe(
          (response: any) => {
            this.loadChat(obj.user_id);
          },
          error => console.error(error)
        );
   }
  }

}

import { HttpClient, HttpRequest } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { TUser } from './../types/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
})
export class ListContactComponent implements OnInit {
  users: TUser[] = [];
  pendingUser: boolean = false;
  constructor(protected user: UsersService, protected http: HttpClient) {}

  async deleteUser(id: string): Promise<any> {
    await this.user.deleteUser(id).then(async (res) => {
      await this.loadUsers();
    });
  }

  ngOnInit(): void {
    this.pendingUser = true;
    this.loadUsers();
  }

  loadUsers() {
    this.user.getAllUsers().subscribe((obs) => {
      this.users = obs;
      this.pendingUser = false;
    });
  }
  clipToContante($event: any) {
    const content = document.getElementById($event.target.id)?.innerText;
    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log('Content copied to clipboard');
        })
        .catch((err) => {
          console.error('Error copying content: ', err);
        });
    }
  }
}

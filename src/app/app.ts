import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Component/header/header';
import { Navbar } from './Component/navbar/navbar';
import { UserProfile } from './Component/user-profile/user-profile';
import { FriendsList } from './Component/friends-list/friends-list';
import { Notifications } from './Component/notifications/notifications';
import { Footer } from './Component/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, UserProfile, FriendsList, Notifications, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plateformeConf');
}

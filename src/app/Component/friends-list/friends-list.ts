import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  nom = signal('Ahmed');
  amis = signal([
    { id: 1, name: 'Sami' },
    { id: 2, name: 'Sarra' },
    { id: 3, name: 'Amine' },
  ]);
}
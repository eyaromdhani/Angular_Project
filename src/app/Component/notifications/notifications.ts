import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = signal([
    { id: 1, message: 'Nouvelle conférence disponible' },
    { id: 2, message: 'Votre ami Sami a commenté votre publication' },
    { id: 3, message: 'Mise à jour de votre profil réussie' },
  ]);

  showNotifications = signal(false);

  toggle() {
    this.showNotifications.update((v) => !v);
  }
}
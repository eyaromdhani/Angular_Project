import { Component, computed, signal } from '@angular/core';

interface Conference {
  id: number;
  titre: string;
  date: string;
  lieu: string;
  places: number;
}

@Component({
  selector: 'app-liste-conference',
  imports: [],
  templateUrl: './liste-conference.html',
  styleUrl: './liste-conference.css',
})
export class ListeConference {
  recherche = signal('');

  conferences = signal<Conference[]>([
    { id: 1, titre: 'Angular 21 Conference', date: '15/11/2027', lieu: 'Tunis', places: 25 },
    { id: 2, titre: 'Signals Workshop', date: '30/11/2027', lieu: 'Ariana', places: 6 },
    { id: 3, titre: 'Web Conference', date: '20/11/2027', lieu: 'Sousse', places: 0 },
  ]);

  filtrees = computed(() => {
    const terme = this.recherche().toLowerCase().trim();
    return this.conferences().filter((c) => c.titre.toLowerCase().includes(terme));
  });

  onSearch(event: Event) {
    this.recherche.set((event.target as HTMLInputElement).value);
  }

  couleur(places: number): string {
    if (places === 0) return 'rouge';
    if (places <= 10) return 'orange';
    return 'vert';
  }

  sinscrire(c: Conference) {
    if (c.places === 0) return;
    this.conferences.update((list) =>
      list.map((x) => (x.id === c.id ? { ...x, places: x.places - 1 } : x))
    );
  }
}
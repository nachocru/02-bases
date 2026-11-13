import { Component, signal } from "@angular/core"

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [],
})

export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ]);

  addCharacter(name: string, power: number) {
    const id = this.characters().length + 1;
    this.characters.update((current) => [...current, { id, name, power }]);
  }
}


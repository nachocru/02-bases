import { Component, computed, signal } from "@angular/core"
import { CharacterList } from "../../components/shared/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/shared/dragonball/character-add/character-add";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAdd],
})

export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);

  powerClasses = computed(() => {
    return  { 'text-danger': true };
  });

  addCharacter(character: Character) {
    this.characters.update((current) => [...current, character]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}


import { ChangeDetectionStrategy, Component, signal } from "@angular/core"

@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroPageComponent {
  public name = signal('Ironman');
  public age = signal(45);

  public getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  public resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  public changeAge(): void {
    this.age.set(60);
  }

  public getHeroCapitalized(): string {
    return this.name().toUpperCase();
  }

}


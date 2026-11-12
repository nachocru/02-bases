import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core"

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe],
  styleUrls: ['./hero-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeroPageComponent {
  public name = signal('Ironman');
  public age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

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


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'website';
}

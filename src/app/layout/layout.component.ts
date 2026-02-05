import { Component, OnInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { BreadcrumbComponent } from '../component/shared/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FormsModule, BreadcrumbComponent, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  quickQuery = '';

  // Signal para manejar el estado del tema
  isDarkMode = signal(true);
  // Signal para manejar el estado del menú móvil
  isMenuOpen = signal(false);

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Check local storage or system preference could go here
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
    this.updateTheme();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  private updateTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode()) {
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
      }
    }
  }

  goSearch(): void {
    const q = (this.quickQuery || '').trim();
    this.closeMenu(); // Close menu on search
    // Navega a /busqueda?q=...
    this.router.navigate(['/busqueda'], { queryParams: { q } });
  }
}

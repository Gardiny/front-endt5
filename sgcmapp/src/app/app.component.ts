import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AlertaComponent } from './component/alerta/alerta.component';
import { SeletorTemaComponent } from './component/seletor-tema/seletor-tema.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    SeletorTemaComponent,
    AlertaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SGCM';
  currentUrl='';
  constructor(router: Router){
    router.events.subscribe(evento => {
      if (evento instanceof NavigationEnd) {
        this.currentUrl = evento.url;
    }
  })
}
}
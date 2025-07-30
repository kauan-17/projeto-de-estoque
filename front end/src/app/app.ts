import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router'; // Importa RouterOutlet e RouterLink

@Component({
  selector: 'app-root', // Seletor HTML para este componente
  standalone: true, // Indica que é um componente standalone
  imports: [
    CommonModule, // Fornece diretivas comuns do Angular como ngIf, ngFor
    RouterOutlet, // Necessário para exibir o conteúdo das rotas
    RouterLink // Para navegação declarativa (se quiser adicionar links no futuro)
  ],
  template: `
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <!-- O RouterOutlet é onde os componentes de rota serão renderizados -->
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.css'] // Pode adicionar estilos globais ou do componente raiz aqui
})
export class AppComponent {
  title = 'meu-projeto-zoneless-novo'; // Título da aplicação
}

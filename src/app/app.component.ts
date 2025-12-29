import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="navbar-brand">
          <h1>BMS Application</h1>
        </div>
      </nav>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f8f9fa;
    }

    .navbar {
      background-color: #007bff;
      color: white;
      padding: 15px 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .navbar-brand {
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
      }
    }

    .main-content {
      padding: 0;
    }
  `]
})
export class AppComponent {
  title = 'bms-ui';
}
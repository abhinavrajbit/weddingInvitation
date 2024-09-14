import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(HomeComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
})
.catch(err => console.error(err));

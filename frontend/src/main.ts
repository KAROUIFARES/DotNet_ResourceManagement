import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const navigation = [
    { name: 'Home', href: '/Home', current: true },
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Price', href: '/price', current: false },  ]
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { loadEnv } from './environments/env';

// loadEnv();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

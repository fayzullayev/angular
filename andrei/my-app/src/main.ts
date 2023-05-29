import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppMymoduleModule } from './app/app.mymodule.module';

platformBrowserDynamic()
  .bootstrapModule(AppMymoduleModule)
  .catch((err) => console.error(err));

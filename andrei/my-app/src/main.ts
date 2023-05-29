import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MyOwnModule } from './app/my-own.module';

platformBrowserDynamic()
  .bootstrapModule(MyOwnModule)
  .catch((err) => console.error(err));

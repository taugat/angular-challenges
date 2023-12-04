import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MainShellModule } from '@angular-challenges/module-to-standalone/shell';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(MainShellModule)],
};

import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterStateSerializer } from '@ngxs/router-plugin';
import { appConfig } from '../app.config';
import { AuthHandler } from './auth-guard/auth-guard.handler';
import { AppErrorHandler } from './error-handler/app-error-handler.service';
import { CustomRouterStateSerializer } from './router/custom-router-serializer';
import { ngxsImports } from './store';

@NgModule({
  imports: [
    /* Angular */
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    /* NGXS */
    ...ngxsImports,

    /* NGX TRANSLATE */
    TranslateModule.forRoot({
      defaultLanguage: appConfig.langs.default,
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [AuthHandler],
      multi: true,
    },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  exports: [FormsModule, TranslateModule],
})
export class CoreModule {
  constructor() {}
}

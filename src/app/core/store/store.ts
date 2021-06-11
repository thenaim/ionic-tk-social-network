import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsModuleOptions } from '@ngxs/store';
import { environment } from '../../../environments/environment';
import { MainPageState } from '../../tabs/main/main.state';
import { TabsState } from '../../tabs/tabs.state';
import { AuthGuardState } from '../auth-guard/auth-guard.state';

const ngxsMainStates = [AuthGuardState, TabsState, MainPageState];
const ngxsStorageStates = [AuthGuardState];

const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false,
    injectContainerState: false,
  },
  compatibility: {
    strictContentSecurityPolicy: true,
  },
};

export const ngxsImports = [
  NgxsModule.forRoot(ngxsMainStates, ngxsConfig),
  NgxsStoragePluginModule.forRoot({
    key: ngxsStorageStates,
  }),
  NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: true, disabled: environment.production }),
  NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  NgxsFormPluginModule.forRoot(),
  NgxsRouterPluginModule.forRoot(),
];

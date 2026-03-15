/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AgentService } from './services/agent.service';
import { AgentLogsService } from './services/agent-logs.service';
import { AuthService } from './services/auth.service';
import { BankService } from './services/bank.service';
import { DeviceService } from './services/device.service';
import { JsonDebuggerService } from './services/json-debugger.service';
import { MasterWorkflowService } from './services/master-workflow.service';
import { NotificationsService } from './services/notifications.service';
import { UpdatePushesService } from './services/update-pushes.service';
import { WorkflowService } from './services/workflow.service';
import { WorkflowFormsService } from './services/workflow-forms.service';
import { WorkflowTransactionsService } from './services/workflow-transactions.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AgentService,
    AgentLogsService,
    AuthService,
    BankService,
    DeviceService,
    JsonDebuggerService,
    MasterWorkflowService,
    NotificationsService,
    UpdatePushesService,
    WorkflowService,
    WorkflowFormsService,
    WorkflowTransactionsService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}

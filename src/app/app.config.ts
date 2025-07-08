// Copyright 2025 Logan Magee
//
// SPDX-License-Identifier: AGPL-3.0-only

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { unauthorizedInterceptor } from './unauthorized.interceptor';
import { withCredentialsInterceptor } from './with-credentials.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(AppRoutingModule),
        provideAnimations(),
        provideHttpClient(withInterceptors([unauthorizedInterceptor, withCredentialsInterceptor])),
    ],
};

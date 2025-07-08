// Copyright 2023 Logan Magee
//
// SPDX-License-Identifier: AGPL-3.0-only

import { ErrorHandler, NgModule } from '@angular/core';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

import { GlobalErrorHandler } from './global-error-handler';
import { routes } from './app.routes';

@NgModule({
    providers: [{
        provide: ErrorHandler,
        useClass: GlobalErrorHandler,
    }, {
        provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
        useValue: { duration: 5000 },
    }],
    imports: [MatSnackBarModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        DefaultComponent
    ],
    imports: [
        RouterModule,
        SharedModule,
        HttpClientModule
    ]
})
export class DefaultModule {}

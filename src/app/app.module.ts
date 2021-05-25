import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectALGComponent } from './components/select-alg/select-alg.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FileDragNDropDirective } from './directives/file-drag-n-drop.directive';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectALGComponent,
    FileDragNDropDirective,
    DropZoneComponent,
    DialogConfirmComponent,
    TableComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    NgxCsvParserModule,
    FormsModule,
    HighchartsChartModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

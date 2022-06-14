import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from "angular-fusioncharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { SecondFlowChartComponent } from './second-flow-chart/second-flow-chart.component';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme,PowerCharts);
@NgModule({
  declarations: [
    AppComponent,
    SecondFlowChartComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FusionChartsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import FusionCharts library and chart modules

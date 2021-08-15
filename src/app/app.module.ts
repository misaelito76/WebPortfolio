import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SchoolComponent } from './school/school.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    HomeComponent,
    AboutComponent,
    ToolbarComponent,
  ],
  imports: [MatMenuModule, MatTooltipModule,
    BrowserModule, CdkAccordionModule, MatGridListModule, MatDividerModule,
    AppRoutingModule, MatMenuModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
    BrowserAnimationsModule, MatProgressBarModule, MatCardModule, MatSliderModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'school', component: SchoolComponent },
      { path: 'about', component: AboutComponent },
      { path: '', component: ToolbarComponent },



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

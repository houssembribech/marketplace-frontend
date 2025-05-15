import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layoutB/app.layout.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClaimReviewAdminComponent } from './ClaimRevManagement/claim-review-admin/claim-review-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserListComponent,
    ClaimReviewAdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

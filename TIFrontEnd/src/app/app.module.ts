import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { HeaderComponent } from './header/header.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { TradeFinanceProcessingComponent } from './trade-finance-processing/trade-finance-processing.component';
import { SystemTailoringComponent } from './system-tailoring/system-tailoring.component';
import { ErrorComponent } from './error/error.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LoggerService } from './services/logger.service';
import { HttpClientModule } from '@angular/common/http'
import { StaticBrowserButtonsComponent } from './panes/static-data/common/static-browser-buttons/static-browser-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/helpers/auth.guard';
import { AuthService } from './services/common/authenticator.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/helpers/jwt.intereceptor';
import { ErrorInterceptor } from './services/helpers/error.interceptor';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedService } from './services/common/shared.service';
import { AttachedDocumentTypeBrowserComponent } from './panes/static-data/AttachedDocumentType/attached-document-type-browser/attached-document-type-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationListComponent,
    HeaderComponent,
    StaticDataComponent,
    TradeFinanceProcessingComponent,
    SystemTailoringComponent,
    ErrorComponent,
    MenuBarComponent,
    StaticBrowserButtonsComponent,
    AttachedDocumentTypeBrowserComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, MatDividerModule, MatButtonModule, 
    MatFormFieldModule, MatIconModule, MatSelectModule, 
    MatInputModule, MatIconModule, MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    LoggerService, 
    AuthGuard, SharedService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

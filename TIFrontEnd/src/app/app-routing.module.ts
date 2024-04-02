import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeFinanceProcessingComponent } from './trade-finance-processing/trade-finance-processing.component';
import { SystemTailoringComponent } from './system-tailoring/system-tailoring.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/helpers/auth.guard';
import { AttachedDocumentTypeBrowserComponent } from './panes/static-data/AttachedDocumentType/attached-document-type-browser/attached-document-type-browser.component';

const routes: Routes = [
  {path: '', component: ApplicationListComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'TradeFinanceProcessing', component: TradeFinanceProcessingComponent},
  {path: 'SystemTailoring', component: SystemTailoringComponent},
  {path: 'StaticDataMaintenance', component: StaticDataComponent},
  {path: 'StaticDataMaintenance/AttachedDocumentTypeBrowser', component: AttachedDocumentTypeBrowserComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

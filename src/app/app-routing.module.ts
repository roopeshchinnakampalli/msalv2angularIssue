import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { PlatformreadyGuard } from './guards/platformready.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard, PlatformreadyGuard],
  },
  {
    /**
     * Needed for login on page load for PathLocationStrategy.
     * See FAQ for details:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular/docs/FAQ.md
     */
    path: 'auth',
    component: MsalRedirectComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile',
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabled' : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

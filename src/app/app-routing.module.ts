import { BackgroundComponent } from './background/background.component';
import { StartPageComponent } from './start-page/start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: StartPageComponent },
    { path: 'back', component: BackgroundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

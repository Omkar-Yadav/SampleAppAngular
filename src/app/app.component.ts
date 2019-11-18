import { WelcomeComponent } from './welcome/welcome.component';
import { TodoComponent } from './todo/todo.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';


@NgModule(
  {
    declarations: [
      AppComponent,
      LoginComponent,
      FooterComponent,
      FeaturesComponent,
      LogoutComponent,
      MenuComponent,
      TodoComponent,
      WelcomeComponent
    ],
    imports: [
      HttpClient
    ]
  }
)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeAComponent } from './home/home-a/home-a.component';
import { HomeBComponent } from './home/home-b/home-b.component';
import { HomeCComponent } from './home/home-c/home-c.component';
import { FooterComponent } from './footer/footer.component';
import { LeetcodeComponent } from './leetcode/leetcode.component';
import { GithubComponent } from './github/github.component';
import { RankComparatorComponent } from './leetcode/rank-comparator/rank-comparator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeAComponent,
    HomeBComponent,
    HomeCComponent,
    FooterComponent,
    LeetcodeComponent,
    GithubComponent,
    RankComparatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

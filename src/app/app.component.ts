import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage}	from "../pages/home/home";
import {AuthService}	from "../services/auth.service";
import { TabsPage } from '../pages/tabs/tabs';
import {TesteloginPage} from "../pages/testelogin/testelogin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TesteloginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initializeApp();
  }
  initializeApp()	{
    this.auth.afAuth.authState
      .subscribe(
        user =>	{
          if (user)	{	this.rootPage =	HomePage;	}
          else {	this.rootPage =	TesteloginPage;	}
        },
        ()	=>	{	this.rootPage =	TesteloginPage;	}
      );
  }	//	fim	da	função	initializeApp
}	//	fim	da	classe


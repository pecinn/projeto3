import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {	AngularFireModule }	from 'angularfire2';
import {	AngularFireAuth }	from 'angularfire2/auth';
import {	firebaseConfig }	from "../config";
import {	AuthService }	from "../services/auth.service";
import {SignupPage} from "../pages/signup/signup";
import {TesteloginPage} from "../pages/testelogin/testelogin";
import {	AngularFireDatabaseModule }	from 'angularfire2/database';
import { ContatoProvider } from '../providers/contato/contato';
import {ContatoPage} from "../pages/contato/contato";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    TesteloginPage,
    ContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule
    //LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    TesteloginPage,
    ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatoProvider,
    ContatoProvider
  ]
})

export class AppModule {}

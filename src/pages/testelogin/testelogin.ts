import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {	FormGroup,	FormBuilder,	Validators }	from '@angular/forms';
import {	AuthService }	from '../../services/auth.service';
import {	HomePage }	from "../home/home";
import {	SignupPage }	from "../signup/signup";

/**
 * Generated class for the TesteloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testelogin',
  templateUrl: 'testelogin.html',
})
export class TesteloginPage {
  loginForm: FormGroup;
  loginError: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, fb: FormBuilder) {
    this.loginForm =	fb.group({
      email:	[''	,	Validators.compose([Validators.required,
        Validators.email])],
      password:	['',	Validators.compose([Validators.required,
        Validators.minLength(8)])]
    });
  }	//fim	do	construtor

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteloginPage');
  }

  login()	:	void {
    let data	=	this.loginForm.value;
    if (!data.email)	{
      return;
    }
    let credenciais	=	{
      email:	data.email,
      password:	data.password
    };
    this.auth.signInWithEmail(credenciais)
      .then(
        ()	=>	this.navCtrl.setRoot(HomePage),
        error =>	this.loginError =	error.message
      );
  }	//	fim	da	função	login
  signup()	:	void {
    this.navCtrl.push(SignupPage);
  }	//	fim	da	função	signup
}	//	fim	da	classe	LoginPage


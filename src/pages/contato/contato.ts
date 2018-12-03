import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormBuilder,	FormGroup,	Validators}	from "@angular/forms";
import {ContatoProvider}	from "../../providers/contato/contato";

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {
  title: string;
  form: FormGroup;
  contact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder:	FormBuilder,	private provider:	ContatoProvider,
              private toast:	ToastController) {
    this.contact =	this.navParams.data.contact ||	{	};
    this.createForm();
    this.setupPageTitle();
  }
  private setupPageTitle()	{
    this.title =	this.navParams.data.contact ?	'Editar	contato'	:	'Novo	contato';
  }
  createForm()	{
    this.form =	this.formBuilder.group({
      key:	[this.contact.key],
      name:	[this.contact.name,	Validators.required],
      tel:	[this.contact.tel,	Validators.required],
    });
  }
  onSubmit()	{
    if (this.form.valid)	{
      this.provider.save(this.form.value)
        .then(()	=>	{
          this.toast.create({	message:	'Novo	contato	salvo	com	sucesso.',
            duration:	3000	}).present();
        })
        .catch((e)	=>	{
          this.toast.create({	message:	'Erro	ao	salvar	o	contato.',
            duration:	3000	}).present();
        }	) }		}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

}

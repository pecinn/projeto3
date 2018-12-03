import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from "ionic-angular";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public alertCtrl: AlertController) {

  }

  addshowPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar Produto',
      message: 'Adicione a quantidade de produtos',
      inputs: [
        {
          name: 'title',
          placeholder: 'quantidade'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Salvar clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  deleteshowPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Remover Produto',
      message: 'Quantidade que deseja retirar',
      inputs: [
        {
          name: 'title',
          placeholder: 'quantidade'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Salvar clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}


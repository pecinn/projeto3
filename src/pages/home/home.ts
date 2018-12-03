import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {ContatoProvider} from "../../providers/contato/contato";
import {ContatoPage} from "../contato/contato";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: Observable<any>;

  constructor(public navCtrl: NavController, private provider: ContatoProvider,
              private toast: ToastController) {

    this.contacts = this.provider.getAll();
  }

  newContact() {
    this.navCtrl.push(ContatoPage);
  }

  editContact(contact: any) {
    this.navCtrl.push(ContatoPage, { contact: contact });
  }

  removeContact(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
  }
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Esteban';
  public gender: 'male'|'female' = 'male';

  public clients: string[] = ['Esteban', 'Tiare', 'Violette', 'Bernanrdo','Yolanda']

  public person = {
    name: 'Esteban',
    age: 26,
    address: 'La florida, Santiago, Chile'
  }

  public myObservableTimer = interval( 2000 )
  public promiseValue = new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve('Tenemos data em la promesa.')
    }, 3500);
  })

  public invitationMAp = {
    'male':'invitarlo',
    'female':'invitarla',
  }

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  changeClient(): void {
    this.name = 'Tiare';
    this.gender = 'female'; 
  }
  
  deleteClient(){
    this.clients.shift();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Esteban';
  public gender: 'male'|'female' = 'male';

  public clients: string[] = ['Esteban', 'Tiare', 'Violette', 'Bernanrdo','Yolanda']

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

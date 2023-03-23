import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = 'Esteban';
  public gender: 'male'|'female' = 'male';
  public invitationMAp = {
    'male':'invitarlo',
    'female':'invitarla',
  }


  changeClient(): void {
    this.name = 'Tiare';
    this.gender = 'female'; 
  }
  

}

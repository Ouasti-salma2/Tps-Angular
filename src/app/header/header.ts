import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'TaskFlow';
canDelete = false;
tasks = [{ id: 0, title: 'T1', date: '14-11-2026' }];

rename() {
  this.title = 'Mes tâches';
}
}

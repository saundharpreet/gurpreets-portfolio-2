import { Component, input } from '@angular/core';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications {
  isDarkMode = input.required<boolean>();
}

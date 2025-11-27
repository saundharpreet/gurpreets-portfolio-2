import { Component, input } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  isDarkMode = input.required<boolean>();
}

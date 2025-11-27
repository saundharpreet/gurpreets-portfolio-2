import { Component, input } from '@angular/core';
import { Experience } from "./experience/experience";
import { About } from "./about/about";
import { Education } from "./education/education";
import { Publications } from "./publications/publications";
import { Achievements } from "./achievements/achievements";

@Component({
  selector: 'app-main',
  imports: [Experience, About, Education, Publications, Achievements],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  isDarkMode = input.required<boolean>();
}

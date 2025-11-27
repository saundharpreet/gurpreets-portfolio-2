import { Component, HostListener, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isShrunk = false;
  isRound = false;

  isDarkMode = false;
  darkModeOutput = output<boolean>();

  ngOnInit(): void {
    if (localStorage.getItem('darkMode') && localStorage.getItem('darkMode') == 'true') {
      this.isDarkMode = true;
      this.darkModeOutput.emit(this.isDarkMode);
    } else {
      this.isDarkMode = false;
      this.darkModeOutput.emit(this.isDarkMode);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) { // Start shrinking after scrolling 50px
      this.isShrunk = true;
    } else {
      this.isShrunk = false;
    }

    if (scrollTop > 340) {
      this.isRound = true;
    } else {
      this.isRound = false;
    }
  }

  openLink(arg0: string) {
    window.open(arg0, '_blank');
  }

  email = "saundgurpreet@gmail.com";

  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => console.log("Copied!"))
      .catch(err => console.error("Failed to copy:", err));
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = '/assets/gurpreets-cv.pdf';
    link.download = 'Gurpreet_CV.pdf';
    link.click();
  }

  darkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkModeOutput.emit(this.isDarkMode);
    localStorage.setItem("darkMode", this.isDarkMode ? 'true' : 'false');
  }
}

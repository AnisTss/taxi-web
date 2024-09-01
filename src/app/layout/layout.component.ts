import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  isCollapsed = false;
  @ViewChild('homeSection') homeSection!: HTMLDivElement;
  @ViewChild('servicesSection') servicesSection!: HTMLDivElement;
  @ViewChild('contactSection') contactSection!: HTMLDivElement;
  @ViewChild('aboutSection') aboutSection!: HTMLDivElement;

  scrollToSection(section: HTMLDivElement) {
    console.log(section);
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

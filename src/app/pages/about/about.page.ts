import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {

  teamMembers = [
    {
      name: 'Ali',
      description: 'Having 10+ years of software development experience has allowed me to expand my skill set into many different areas of the software development process. I am not just a coder. I am a researcher, architect, designer etc.',
      cardTitle: 'Ali - Architect and Lead Developer'
    },
    {
      name: 'Dante',
      description: 'For 10+ years, I’ve been turning the important (but dull) information in annual reports into vibrant, exciting works of visionary thought leadership that excites directors and investors alike.',
      cardTitle: 'Dante - UI/UX Director'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

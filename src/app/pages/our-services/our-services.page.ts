import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.page.html',
  styleUrls: ['./our-services.page.scss'],
})
export class OurServicesPage implements OnInit {

  services = [
    {
      name: 'Digital Consulting',
      note: 'We offer 1 on 1 sessions, knowledge transfrs and many different type of workshops'
    },
    {
      name: 'Graphic Design',
      note: 'Are you in need of a digital makeover or any type of graphic?'
    },
    {
      name: 'Web and App Development',
      note: 'We build you a custom designed website or app with very high detail.'
    },
    {
      name: 'Software Development',
      note: 'We provide a tailored digital solution for you or your business.'
    }
  ];

  technologies = ['Javascript', 'HTML5', 'CSS', 'Angular', 'React', 'MongoDB', 'AWS', 'Azure', 'Python', 'Django', 'Photoshop', 'Sketch'];

  skills = ['Software Development', 'Graphic Design', 'Project Management', 'Agile Workflow', 'Frontend Development', 'Backend Development',
    'API Development', 'PWA Development', 'CMS Web Development', 'Infrastructure Development', 'Cloud Integration', 'Database Development'];

  constructor() { }

  ngOnInit() {
  }

}

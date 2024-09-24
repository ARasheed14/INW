import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  public projectList = [
    {
      name: 'Portfolio 1',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'Angular'
    },
    {
      name: 'Portfolio 2',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'Ionic'
    },
    {
      name: 'Portfolio 3',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'React'
    },
    {
      name: 'Portfolio 4',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'Photoshop'
    },
    {
      name: 'Portfolio 5',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'Dreamweaver'
    },
    {
      name: 'Portfolio 6',
      url: '',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus consequat litora eleifend in facilisi. Risus nam dui hac aliquet metus dolor. Ante facilisis nisi purus himenaeos; ac torquent! Suscipit orci vulputate potenti class habitant maecenas tristique nec. Enim cursus nam cursus quis magna vel bibendum. Ased euismod platea nisi eget risus. Montes eleifend orci taciti cras lobortis ac sollicitudin posuere suspendisse. Pulvinar elit pharetra porttitor, suspendisse tellus nulla laoreet.',
      subtitle: 'MongoDB'
    }];

  constructor() { }

  ngOnInit() {
  }

}

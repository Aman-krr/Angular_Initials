import { Component } from '@angular/core';

@Component({
  //selectors should always be unique, as we should over write it in the application by mistake
  //Making selector a attribute 

  // selector: '[cli-component]',
  //selector by class we can also use
//selector by id won't work and also other psudeo seletor also don't work
   selector: '.cli-component',

  //Html Templates(FILES) can be also defined this way if we have less number of lines in Html
  //We are not generating any seperate HTML files hre
  template: `<h3>THIS IS INLINE HTML COMPONENT</h3><div>I am P tag</div>`,
  // styleUrls: ['./cli-component.component.css']
  //we have einfed inline css here
  styles:[`h3{
    color:red;}
    div{
      color:darkmagenta;
    }
   `
  ]
})
export class CliComponentComponent {

}

import { Component, OnInit } from '@angular/core';
import { fade, bounceLeftOutAnimation, fadeAnimation } from '../animation';
import { stagger , transition, style, animate, useAnimation, trigger, query, animateChild } from '@angular/animations';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
   
   trigger('todosAnimation', [
      transition(':enter' , [
        query('h2', [
          style({transform: 'translateY(-20px)'}),
          animate(1000),
        ]),
        query('@todoAnimation',stagger(200, animateChild())),
      ])
    ]),
    

    trigger('todoAnimation', [
      transition(':enter', [    // void => *, * => void
       useAnimation(fadeAnimation, {
         params: {
           duration: '1000ms'
         }
       })
      ]),

      transition(':leave', [
        style({backgroundColor: 'red'}),
        useAnimation(bounceLeftOutAnimation),

      ])
    ]),
  
  ]
})


export class TodoListComponent implements OnInit {

  public lists = ['nahid', 'hasan'];
  constructor() { }

  addEliment(Input)
  {
    var s = Input.value;
    this.lists.push(s);
    Input.value = '';
  }

  deleteElement(list){

   var count = this.lists.indexOf(list);

      this.lists.splice(count, 1);

  }

  animationStarted($event){
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }

  ngOnInit() {
  }

}

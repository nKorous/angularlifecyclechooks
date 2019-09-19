import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  onChanges: {triggered: boolean, count: number} = {triggered: false, count: 0}
  onInit: {triggered: boolean, count: number} = {triggered: false, count: 0}
  doCheck: {triggered: boolean, count: number} = {triggered: false, count: 0}
  afterContentInit: {triggered: boolean, count: number} = {triggered: false, count: 0}
  afterContentChecked: {triggered: boolean, count: number} = {triggered: false, count: 0}
  afterViewInit: {triggered: boolean, count: number} = {triggered: false, count: 0}
  afterViewChecked: {triggered: boolean, count: number} = {triggered: false, count: 0}
  onDestroy: {triggered: boolean, count: number} = {triggered: false, count: 0}

  name: string
  pushed: number = 0

  inputName(value: string){
    this.name = value
  }

  pushedButton(){
    this.pushed++
  }
  
  ngOnChanges(){
    this.onChanges.triggered = !this.onChanges.triggered
    this.onChanges.count++
  }

  ngOnInit(){
    this.onInit.triggered = !this.onInit.triggered
    this.onInit.count++
  }

  ngDoCheck(){
    this.doCheck.triggered = !this.doCheck.triggered
    this.doCheck.count++
  }

  ngAfterContentInit(){
    this.afterContentInit.triggered = !this.afterContentInit.triggered
    this.afterContentInit.count++
  }

  ngAfterContentChecked(){
    this.afterContentChecked.triggered = !this.afterContentChecked.triggered
    this.afterContentChecked.count++
  } 

  ngAfterViewInit(){
    this.afterViewInit.triggered = !this.afterViewInit.triggered
    this.afterViewInit.count++
  }

  ngAfterViewChecked(){
    this.afterViewChecked.triggered =!this.afterViewChecked.triggered
    this.afterViewChecked.count++
  }

  ngOnDestroy(){
    this.onDestroy.triggered = !this.onDestroy.triggered
    this.onDestroy.count++

    alert('destoryed')
  }
}

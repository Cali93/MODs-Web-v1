import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title) { }

  ngOnInit() { }

  // get isMobile(): boolean {
  //   return this.media.isActive('xs') || this.media.isActive('sm');
  // }

  get title(): string {
    return this.titleService.getTitle();
  }
}

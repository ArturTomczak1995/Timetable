import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Leaves} from '../leaves';
import {Shifts} from '../shifts';
import { ContextMenuSettingsService } from '../services/context-menu-settings.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements AfterViewInit {

  constructor(
    private contextMenuSettings: ContextMenuSettingsService
  ) { }

  private leaveModel = new Leaves();
  private shiftModel = new Shifts(1, '06:00', '18:00', null);

  private leaveOptionsContext = false;
  private showOptions = false;
  private dateTimestamp: number;
  private empIdx: number;
  @Input() x: number;
  @Input() y: number;

  cmX = -100;
  cmY = -100;

  @Output() contextMenuBool = new EventEmitter();
  @ViewChild('CMI') contextMenu: ElementRef;


  ngAfterViewInit() {
    setTimeout(() => {
    this.shiftModel.id = this.empIdx;
    this.shiftModel.date = this.dateTimestamp;
    this.contextMenuSettings.currentMessage.subscribe(() => this.default());
    }, 20);

  }

  positionContextMenu() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const contextMenuWidth = this.contextMenu.nativeElement.offsetWidth;
    const contextMenuHeight = this.contextMenu.nativeElement.offsetHeight;

    if ( this.x + contextMenuWidth >= windowWidth) {
      this.x -= contextMenuWidth;
      console.log('if');
    }
    if (this.y + contextMenuHeight >= windowHeight) {
      this.y -= contextMenuHeight;
    }
    this.cmX = this.x;
    this.cmY = this.y;
    // console.log(windowWidth);
    // console.log(this.x);
    // console.log(contextMenuWidth);
  }

  default() {
    this.showOptions = false;
    this.leaveOptionsContext = false;
    this.positionContextMenu();
  }

  showShiftWindow() {
    this.showOptions = true;
  }

  addShift(even) {
    event.preventDefault();
    console.log(even.shiftStart);
    this.contextMenuBool.emit(false);
  }

  addLeave(reason) {
    console.log(reason);
    this.contextMenuBool.emit(false);
  }
}

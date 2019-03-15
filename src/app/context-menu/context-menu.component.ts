import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit} from '@angular/core';
import {map, share} from 'rxjs/operators';
import {Leaves} from '../leaves';
import {Shifts} from '../shifts';
import {ContextMenuSettingsService} from '../services/context-menu-settings.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  constructor(
    private contextMenuSettings: ContextMenuSettingsService,
  ) {
  }

  @Input() x: number;
  @Input() y: number;
  @Output() contextMenuBool = new EventEmitter();
  @ViewChild('CMI') contextMenu: ElementRef;
  @ViewChild('CM') contextMenuOption: ElementRef;
  @ViewChild('LeaveOptions') LeaveOptions: ElementRef;

  private leaveModel = new Leaves();
  private shiftModel = new Shifts(1, '06:00', '18:00', null);

  private leaveOptionsContext = false;
  private showOptions = false;
  private dateTimestamp: number;
  private empIdx: number;

  contextMenuWidth: number;
  contextMenuHeight: number;
  contextMenuLeavePosition: object;

  positionInitialization: Observable<boolean>;

  ngOnInit() {
    this.positionContextMenu();
    setTimeout(() => {
      this.shiftModel.id = this.empIdx;
      this.shiftModel.date = this.dateTimestamp;
      this.contextMenuSettings.currentMessage.subscribe(() => this.default());
    }, 0);
  }

  positionContextMenu() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.contextMenuWidth = this.contextMenu.nativeElement.offsetWidth;
    this.contextMenuHeight = this.contextMenu.nativeElement.offsetHeight;

    if (this.x + this.contextMenuWidth >= windowWidth) {
      this.x -= this.contextMenuWidth;
    }
    if (this.y + this.contextMenuHeight >= windowHeight) {
      this.y -= this.contextMenuHeight;
    }
    this.positionInitialization = Observable.create(observer => {
      observer.next(true);
    }).pipe(
      map(() => true), share());
  }

  positionContextMenuOptions() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const contextMenuOptionHeight = this.contextMenuOption.nativeElement.offsetHeight;
    const contextMenuOptionWidth = this.contextMenuOption.nativeElement.offsetWidth;
    const LeaveOptionsHeight = this.LeaveOptions.nativeElement.offsetHeight;
    let positionX = this.contextMenuWidth + this.x;
    let positionY = this.contextMenuHeight - (contextMenuOptionHeight / 2) - 5 + this.y; // 5 = padding

    if (positionX + contextMenuOptionWidth >= windowWidth) {
      positionX = this.x - this.contextMenuWidth;
    }
    if (positionY + LeaveOptionsHeight >= windowHeight) {
      positionY -= LeaveOptionsHeight;
    }
    this.contextMenuLeavePosition = {'left.px': positionX, 'top.px': positionY};
  }


  default() {
    this.showOptions = false;
    this.leaveOptionsContext = false;
    this.positionContextMenuOptions();
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

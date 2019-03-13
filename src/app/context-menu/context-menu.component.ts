import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Leaves} from '../leaves';
import {Shifts} from '../shifts';
import { ContextMenuSettingsService } from '../services/context-menu-settings.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

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
  @Output() contextMenuBool = new EventEmitter();

  ngOnInit() {
    this.contextMenuSettings.currentMessage.subscribe(() => this.default());
    this.shiftModel.id = this.empIdx;
    this.shiftModel.date = this.dateTimestamp;
  }

  default() {
    this.showOptions = false;
    this.leaveOptionsContext = false;
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

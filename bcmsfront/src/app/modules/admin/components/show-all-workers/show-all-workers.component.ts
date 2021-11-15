import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Worker } from 'src/app/core/models/worker';

@Component({
  selector: 'app-show-all-workers',
  templateUrl: './show-all-workers.component.html',
  styleUrls: ['./show-all-workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowAllWorkersComponent {
  @Input() dataSource: Worker[];
  @Output() deleteWorkerClick = new EventEmitter<Worker>();

  displayedColumns: string[] = ['email', 'firstName', 'surname', 'role','delete'];

  public onDeleteWorkerClick(worker: Worker): void {
    this.deleteWorkerClick.emit(worker);
  } 
}

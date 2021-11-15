import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/core/models/worker';
import { ShowWorkersFacadeService } from './show-workers-facade.service';

@Component({
  selector: 'app-show-workers-page',
  templateUrl: './show-workers-page.component.html',
  styleUrls: ['./show-workers-page.component.scss']
})
export class ShowWorkersPageComponent implements OnInit {
  public workers$ = this.showWorkersFacade.workers$;
  public deleteWorker$ = this.showWorkersFacade.deleteWorker$;

  constructor(
    private showWorkersFacade: ShowWorkersFacadeService
  ) { }

  ngOnInit(): void {
    this.showWorkersFacade.loadWorkers();
    this.workers$.subscribe((data) => console.log('nowe dane111', data));
  }

  public onDeleteWorker(worker: Worker): void {
    this.showWorkersFacade.deleteWorker(worker.id);
  }

}

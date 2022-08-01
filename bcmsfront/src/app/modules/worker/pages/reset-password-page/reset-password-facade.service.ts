import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../clients/worker-client.service';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordFacadeService {
  constructor(public workerClient: WorkerClientService) {}

  public resetPassword(mail: string) {
    this.workerClient.sendResetPasswordEmail(mail).subscribe();
  }
}

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DogModel } from '../../models/dog.model';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogListComponent {
  readonly list$: Observable<DogModel[]> = this._dogService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<DogModel[]> = this.refresh$.pipe(
    switchMap(data => this._dogService.getAll())
  );


  private _detailsSubject: Subject<DogModel> = new Subject<DogModel>();
  public details$: Observable<DogModel> = this._detailsSubject.asObservable();

  readonly cities$: Observable<DogModel[]> = this._dogService.getCities();

  constructor(private _dogService: DogService) {
  }

  selectDog(dog: DogModel): void {
    this._detailsSubject.next(dog);
  }
  delete(id: string): void {
  this._dogService.delete(id).subscribe(() => this._refreshSubject.next());
  }

}

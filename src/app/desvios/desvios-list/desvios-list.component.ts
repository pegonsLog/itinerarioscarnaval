import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { Desvios } from 'src/app/model/desvio';
import { DesviosService } from '../desvios.service';

@Component({
  selector: 'app-desvios-list',
  templateUrl: './desvios-list.component.html',
  styleUrls: ['./desvios-list.component.scss']
})
export class DesviosListComponent{
  desviosFire$: Observable<any>;
  queryField = new FormControl();
  value: string = '';
  teste: Desvios = [];

  constructor(
    private desviosService: DesviosService,
    public dialog: MatDialog
  ) {
    this.desviosFire$ = desviosService
      .list()
      .pipe(
        map((result: any) => result.sort((a: any, b: any) => a.linha!.localeCompare(b.linha!)))
      );
  }


  blocos() {
    throw new Error('Method not implemented.');
  }
  load() {
    throw new Error('Method not implemented.');
  }
  onSearch() {
    throw new Error('Method not implemented.');
  }
}

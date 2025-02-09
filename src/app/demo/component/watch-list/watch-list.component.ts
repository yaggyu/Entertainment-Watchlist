import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../../theme/shared/components/card/card.component';

interface IWatchList {
    name: FormControl<string>;
    year: FormControl<string>;
    yearWatched: FormControl<string>;
    genre: FormControl<string>;
}

@Component({
    standalone: true,
    selector: 'app-watch-list',
    imports: [CommonModule, CardComponent, ReactiveFormsModule],
    templateUrl: './watch-list.component.html',
    styleUrls: ['./watch-list.component.scss']
})

export class WatchListComponent {

    displayedColumns: string[] = ['name', 'price', 'weight', 'symbol'];
    watchListFormGroup: FormGroup<IWatchList>;

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        this.watchListFormGroup = new FormGroup ({
            name: new FormControl<string>(''),
            year: new FormControl<string>(''),
            yearWatched: new FormControl<string>(''),
            genre: new FormControl<string>(''),
        })
    }

    addNew(): void {
        const name = this.watchListFormGroup.controls.name.value;
        const year = this.watchListFormGroup.controls.year.value;
        const yearWatched = this.watchListFormGroup.controls.yearWatched.value;
        const genre = this.watchListFormGroup.controls.genre.value;

    }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-one-page-structure',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './one-page-structure.component.html',
    styleUrl: './one-page-structure.component.css'
})
export class OnePageStructureComponent { }

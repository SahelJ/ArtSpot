import { Component } from '@angular/core';
import { OeuvreService } from 'src/app/services/oeuvre.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage{
  public folder: string;
  oeuvres: Array<any>;
  // loading = true;

  constructor(private oeuvreService: OeuvreService) { 
    this.load();
  }

  load() {
    this.oeuvreService.getAll().subscribe(data=>{ this.oeuvres = data; });
  }

}

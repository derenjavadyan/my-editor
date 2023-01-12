import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  myContent = '';

  constructor(private editorsService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  private async getContent() {
    this.myContent = await this.editorsService.getContent();
  }

  saveContent(content: string) {
    this.editorsService.setContent(content);
  }
}

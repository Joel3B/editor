import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  content = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  private async getContent() {
    this.content = await this.editorService.getContent();
  }

  saveContent(content: string) {
    this.editorService.setContent(content);
  }
}

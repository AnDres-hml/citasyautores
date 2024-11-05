import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class SettingsPage implements OnInit {
  allowDeleteQuotes: boolean = false;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadSettings();
  }

  async loadSettings() {
    const storedValue = await this.storage.get('allowDeleteQuotes');
    this.allowDeleteQuotes = storedValue !== null ? storedValue : false;
  }

  async onToggleChange() {
    await this.storage.set('allowDeleteQuotes', this.allowDeleteQuotes);
  }
}

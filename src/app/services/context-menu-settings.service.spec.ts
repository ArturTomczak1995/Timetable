import { TestBed } from '@angular/core/testing';

import { ContextMenuSettingsService } from './context-menu-settings.service';

describe('ContextMenuSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContextMenuSettingsService = TestBed.get(ContextMenuSettingsService);
    expect(service).toBeTruthy();
  });
});

import { ModuleWithProviders } from '@angular/core/src/core';
import { EffectsModule } from '@ngrx/effects';

import { ProfileEffects } from './profile.effects';
import { YoutubeEffects } from './youtube.effects';

export const ngrxEffects: ModuleWithProviders[] = [
  EffectsModule.run(ProfileEffects),
  EffectsModule.run(YoutubeEffects)
];

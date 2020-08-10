import { AppState } from '../../shared.state';

export type id = string;
export type isPlaying = boolean;
export type progress = number;
export type volume = number;

export interface MusicState {
  id: string;
  isPlaying: boolean;
  progress: number;
  volume: number;
}

export interface StateMusic extends AppState {
  music: MusicState;
}

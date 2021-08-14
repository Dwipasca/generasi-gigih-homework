import { UserProfile, Track } from "./spotify";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: UserProfile | null;
}

export interface PlaylistState {
  tracks: Track[];
  selectedTracks: string[];
  form: {
    title: string;
    description: string;
  };
}

export interface ITracks {
  tracks: Track[];
}

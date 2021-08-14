import { createSlice } from '@reduxjs/toolkit'

import { PlaylistState } from '../types/store'

const initialState: PlaylistState = {
  tracks: [],
  selectedTracks: [],
  form: {
    title: '',
    description: '',
  },
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload
    },
    addSelectedTracks: (state, action) => {
      state.selectedTracks.push(action.payload)
    },
    substractSelectedTracks: (state, action) => {
      const index = state.selectedTracks.indexOf(action.payload)
      state.selectedTracks.splice(index, 1)
    },
    setFormTitle: (state, action) => {
      state.form.title = action.payload
    },
    setFormDescription: (state, action) => {
      state.form.description = action.payload
    },
    clearForm: state => {
      state.form = initialState.form
    },
    clearSelectedTracks: state => {
      state.selectedTracks = []
    },
    clearState: () => initialState,
  },
})

export const {
  setTracks,
  addSelectedTracks,
  substractSelectedTracks,
  clearSelectedTracks,
  setFormTitle,
  setFormDescription,
  clearState
} = playlistSlice.actions

export default playlistSlice.reducer
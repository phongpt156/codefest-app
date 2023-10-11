import { createReducer } from '@reduxjs/toolkit';
import { MapInfo } from '../../types';
import {
  setConnectedGame,
  setConnectedServer,
  setGameId,
  setMapInfo,
  setPlayerId,
} from './actions';

export interface GlobalState {
  connectedServer: boolean;
  connectedGame: boolean;
  gameId?: string;
  playerId?: string;
  mapInfo?: MapInfo;
}

const initialState: GlobalState = {
  connectedServer: false,
  connectedGame: false,
};

export default createReducer<GlobalState>(initialState, (builder) =>
  builder
    .addCase(setConnectedServer, (state, { payload }) => {
      state.connectedServer = payload;
    })
    .addCase(setConnectedGame, (state, { payload }) => {
      state.connectedGame = payload;
    })
    .addCase(setGameId, (state, { payload }) => {
      state.gameId = payload;
    })
    .addCase(setPlayerId, (state, { payload }) => {
      state.playerId = payload;
    })
    .addCase(setMapInfo, (state, { payload }) => {
      state.mapInfo = payload;
    })
);

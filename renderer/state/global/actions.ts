import { createAction } from '@reduxjs/toolkit';
import { MapInfo } from '../../types';

export const setConnectedServer = createAction<boolean>(
  'global/setConnectedServer'
);

export const setConnectedGame = createAction<boolean>(
  'global/setConnectedGame'
);

export const setGameId = createAction<string>('global/setGameId');

export const setPlayerId = createAction<string>('global/setPlayerId');

export const setMapInfo = createAction<MapInfo>('global/setMapInfo');

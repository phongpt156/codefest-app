import { useSelector } from 'react-redux';
import { AppState } from '..';

export function useGlobalState() {
  return useSelector<AppState, AppState['global']>((state) => state.global);
}

export function useConnectedServer() {
  return useSelector<AppState, AppState['global']['connectedServer']>(
    (state) => state.global.connectedServer
  );
}

export function useConnectedGame() {
  return useSelector<AppState, AppState['global']['connectedGame']>(
    (state) => state.global.connectedGame
  );
}

export function useGameId() {
  return useSelector<AppState, AppState['global']['gameId']>(
    (state) => state.global.gameId
  );
}

export function usePlayerId() {
  return useSelector<AppState, AppState['global']['playerId']>(
    (state) => state.global.playerId
  );
}

export function useMapInfo() {
  return useSelector<AppState, AppState['global']['mapInfo']>(
    (state) => state.global.mapInfo
  );
}

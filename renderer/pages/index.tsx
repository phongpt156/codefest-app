import { useMemoizedFn } from 'ahooks';
import { useEffect } from 'react';
import useSocket from '../hooks/useSocket';
import { useAppDispatch } from '../state';
import {
  setConnectedGame,
  setConnectedServer,
  setMapInfo,
} from '../state/global/actions';
import {
  useConnectedGame,
  useConnectedServer,
  usePlayerId,
} from '../state/global/hooks';
import { MapInfo } from '../types';
import ConnectServer from '../components/ConnectServer';
import ConnectGame from '../components/ConnectGame';
import GameController from '../components/GameController';
import MapRender from '../components/MapRender';
import GameDashboard from '../components/GameDashboard';

const Index = () => {
  const { socket, setSocket } = useSocket();
  const connectedServer = useConnectedServer();
  const connectedGame = useConnectedGame();
  const dispatch = useAppDispatch();
  const playerId = usePlayerId();

  const handleJoinGame = useMemoizedFn(
    (response: { game_id: string; player_id: string }) => {
      if (response.player_id === playerId) {
        dispatch(setConnectedGame(true));
      }
    }
  );

  const handleConnect = () => {
    dispatch(setConnectedServer(true));
  };

  const handleTicktackPlayer = (info: { map_info: MapInfo }) => {
    dispatch(setMapInfo(info.map_info));
  };

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('join game', handleJoinGame);
    socket.on('connect', handleConnect);
    socket.on('ticktack player', handleTicktackPlayer);

    return () => {
      socket.off('join game', handleJoinGame);
      socket.off('connect', handleConnect);
      socket.off('ticktack player', handleTicktackPlayer);
      socket.disconnect();
      dispatch(setConnectedServer(true));
      setSocket(undefined);
    };
  }, [socket]);

  return (
    <main>
      Connected: {connectedServer.toString()}
      {!connectedServer && <ConnectServer />}
      {connectedServer && !connectedGame && <ConnectGame />}
      {connectedGame && (
        <>
          <GameController />
          <MapRender />
          <GameDashboard />
        </>
      )}
    </main>
  );
};

export default Index;

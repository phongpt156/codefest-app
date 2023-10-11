import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';

const useSocket = () => {
  const appData = useContext(AppContext);

  return {
    socket: appData.socket,
    setSocket: appData.setSocket,
  };
};

export default useSocket;

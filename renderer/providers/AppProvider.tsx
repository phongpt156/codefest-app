import { FC, PropsWithChildren, createContext, useState } from 'react';
import { Socket } from 'socket.io-client';

export const AppContext = createContext<{
  socket?: Socket;
  setSocket: (socket: Socket | undefined) => void;
}>({
  setSocket: () => {},
});

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();

  return (
    <AppContext.Provider
      value={{
        socket,
        setSocket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

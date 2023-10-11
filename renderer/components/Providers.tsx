import { Provider } from 'react-redux';
import store from '../state';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

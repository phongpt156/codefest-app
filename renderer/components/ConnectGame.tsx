import { Button, Form, Input } from 'antd';
import { batch } from 'react-redux';
import useSocket from '../hooks/useSocket';
import { useAppDispatch } from '../state';
import { setGameId, setPlayerId } from '../state/global/actions';

const ConnectGame = () => {
  const [form] = Form.useForm();
  const { socket } = useSocket();
  const dispatch = useAppDispatch();

  const handleFinish = (values: { gameId: string; playerId: string }) => {
    if (!socket) {
      return;
    }

    batch(() => {
      dispatch(setGameId(values.gameId));
      dispatch(setPlayerId(values.playerId));
    });

    socket.emit('join game', {
      game_id: values.gameId,
      player_id: values.playerId,
    });
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item name="gameId">
        <Input placeholder="Game ID" />
      </Form.Item>
      <Form.Item name="playerId">
        <Input placeholder="Player ID" />
      </Form.Item>
      <Button htmlType="submit">Connect</Button>
    </Form>
  );
};

export default ConnectGame;

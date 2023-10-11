import { Button, Form, Input } from 'antd';
import { io } from 'socket.io-client';
import useSocket from '../hooks/useSocket';

const ConnectServer = () => {
  const [form] = Form.useForm();
  const { setSocket } = useSocket();

  const handleFinish = (values: { origin: string; playerId: string }) => {
    const socket = io(values.origin);

    setSocket(socket);
  };

  return (
    <Form form={form} onFinish={handleFinish}>
      <Form.Item name="origin">
        <Input placeholder="Base origin" />
      </Form.Item>

      <Button htmlType="submit">Connect</Button>
    </Form>
  );
};

export default ConnectServer;

import { useKeyPress } from 'ahooks';
import useSocket from '../hooks/useSocket';

const characterMapCommand = {
  a: '1',
  d: '2',
  w: '3',
  s: '4',
  left: '1',
  right: '2',
  up: '3',
  down: '4',
  space: 'b',
};

const GameController = () => {
  const { socket } = useSocket();

  useKeyPress('uparrow', (event) => {
    event.preventDefault();

    socket?.emit('drive player', {
      direction: characterMapCommand['up'],
    });
  });

  useKeyPress('downarrow', (event) => {
    event.preventDefault();

    socket?.emit('drive player', {
      direction: characterMapCommand['down'],
    });
  });

  useKeyPress('leftarrow', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['left'],
    });
  });

  useKeyPress('rightarrow', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['right'],
    });
  });

  useKeyPress('w', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['up'],
    });
  });

  useKeyPress('s', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['down'],
    });
  });

  useKeyPress('a', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['left'],
    });
  });

  useKeyPress('d', () => {
    socket?.emit('drive player', {
      direction: characterMapCommand['right'],
    });
  });

  useKeyPress('space', (event) => {
    event.preventDefault();

    socket?.emit('drive player', {
      direction: characterMapCommand['space'],
    });
  });

  return null;
};

export default GameController;

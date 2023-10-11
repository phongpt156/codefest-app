import { Col, Row } from 'antd';
import { useMapInfo } from '../state/global/hooks';

const GameDashboard = () => {
  const mapInfo = useMapInfo();
  const players = mapInfo?.players;

  return (
    <Row className="mt-3">
      {players?.map((player) => (
        <Col span={12} key={player.id}>
          <p>Player ID: {player.id}</p>
          <p>Health: {player.lives}</p>
          <p>Score: {player.score}</p>
          <p>Box: {player.box}</p>
          <p>Dragon Egg Speed: {player.dragonEggSpeed}</p>
          <p>Dragon Egg Attack: {player.dragonEggAttack}</p>
          <p>Dragon Egg Delay: {player.dragonEggDelay}</p>
          <p>Dragon Egg Mystic: {player.dragonEggMystic}</p>
        </Col>
      ))}
    </Row>
  );
};

export default GameDashboard;

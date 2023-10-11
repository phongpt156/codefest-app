import { FC, useMemo, useRef } from 'react';
import { EggType, SPOIL_TYPE_MAP_EGG_IMAGE } from '../../constants';
import { useMapInfo } from '../../state/global/hooks';
import Countdown from 'react-countdown';
import { useSize } from 'ahooks';

const renderer = ({ seconds, milliseconds, completed }) => {
  if (completed) {
    // Render a completed state
    return null;
  } else {
    // Render a countdown
    return (
      <span>
        {seconds}:{milliseconds}
      </span>
    );
  }
};

const Tile: FC<{ col: number; rowIndex: number; colIndex: number }> = ({
  col,
  rowIndex,
  colIndex,
}) => {
  const ref = useRef(null);
  const size = useSize(ref);
  const mapInfo = useMapInfo();
  const spoils = mapInfo?.spoils;
  const players = mapInfo?.players;
  const bombs = mapInfo?.bombs;
  const spoil = useMemo(() => {
    return spoils?.find(
      (spoil) => spoil.row === rowIndex && spoil.col === colIndex
    );
  }, [rowIndex, colIndex, spoils]);
  const player = useMemo(() => {
    return players?.find(
      (player) =>
        player.currentPosition.row === rowIndex &&
        player.currentPosition.col === colIndex
    );
  }, [rowIndex, colIndex, players]);
  const bomb = useMemo(() => {
    return bombs?.find(
      (bomb) => bomb.row === rowIndex && bomb.col === colIndex
    );
  }, [rowIndex, colIndex, bombs]);
  const powerOfBomb = useMemo(() => {
    if (!bomb) {
      return 0;
    }

    const player = players?.find((player) => player.id === bomb.playerId);

    return player.power;
  }, [bomb]);
  const targetDate = useMemo(() => {
    if (bomb) {
      return Date.now() + bomb.remainTime;
    }
  }, [bomb]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center bg-cover h-full positive"
      style={{
        backgroundImage: `url(/images/tile-${col}.jpg)`,
        aspectRatio: 1,
      }}
    >
      {spoil ? (
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage: `url(/images/${
              SPOIL_TYPE_MAP_EGG_IMAGE[spoil?.spoil_type as EggType]
            })`,
          }}
        />
      ) : null}

      {player ? (
        <>
          <div
            className="text-[10px] absolute"
            style={{
              userSelect: 'none',
            }}
          >
            {player.id}
          </div>
        </>
      ) : null}

      {bomb ? (
        <div className="positive w-full h-full flex items-center justify-center">
          <div
            style={{
              width: '40px',
              height: '40px',
            }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(/images/bombs.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left top',
              }}
            />
          </div>

          <div
            className="absolute"
            style={{
              top: '-20px',
            }}
          >
            <Countdown
              date={targetDate}
              intervalDelay={0}
              precision={2}
              renderer={renderer}
            />
          </div>

          <div
            className="absolute w-full h-full"
            style={{
              backgroundColor: 'red',
              opacity: '.4',
              zIndex: 1,
              width: size?.width + size?.width * powerOfBomb * 2,
              height: size?.height,
              left: -(size?.width * powerOfBomb),
            }}
          />
          <div
            className="absolute w-full h-full"
            style={{
              backgroundColor: 'red',
              opacity: '.4',
              zIndex: 1,
              width: size?.width,
              height: size?.height + size?.height * powerOfBomb * 2,
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Tile;

import { useMapInfo } from '../state/global/hooks';
import Tile from './MapRender/Tile';

const MapRender = () => {
  const mapInfo = useMapInfo();

  return (
    <div>
      {mapInfo?.map?.map((cols, rowIndex) => (
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
          }}
          key={rowIndex}
        >
          {cols.map((col, colIndex) => (
            <Tile
              rowIndex={rowIndex}
              colIndex={colIndex}
              col={col}
              key={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MapRender;

import classNames from 'classnames';

import CheckMark from '@/assets/icons/UI/Check mark.svg';

import './ColorCycle.scss';

type ColorCycleProps = {
  color: string;
  name: string;
  isActive: boolean;
  onSelect: (color: string) => void;
};

export default function ColorCycle({
  color,
  name,
  onSelect,
  isActive,
}: ColorCycleProps) {
  return (
    <button
      type="button"
      aria-label={`Выбрать цвет ${name}`}
      aria-pressed={isActive}
      className="color-cycle__button"
      style={{ backgroundColor: color }}
      onClick={() => onSelect(name)}
    >
      <img
        src={CheckMark}
        alt=""
        className={classNames('color-cycle__mark', {
          'color-cycle__mark--active': isActive,
        })}
      />
    </button>
  );
}

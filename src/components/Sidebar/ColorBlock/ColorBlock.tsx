import ColorCycle from '@/components/UI/ColorCycle';

import './ColorBlock.scss';

const colors = [
  { type: 'red', color: 'var(--color-red)' },
  { type: 'white', color: 'var(--color-white)' },
  { type: 'black', color: 'var(--color-black)' },
  { type: 'blue', color: 'var(--color-blue)' },
  { type: 'azure', color: 'var(--color-azure)' },
  { type: 'perple', color: 'var(--color-perple)' },
  { type: 'orange', color: 'var(--color-orange)' },
  { type: 'pink', color: 'var(--color-pink)' },
  { type: 'yellow', color: 'var(--color-yellow)' },
];

type ColorBlockProps = {
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
  availableColors?: string[];
  multiple?: boolean;
};

export default function ColorBlock({
  selectedColors,
  onColorsChange,
  availableColors,
  multiple = false,
}: ColorBlockProps) {

  const handleColorSelect = (colorType: string) => {

    if (!multiple) {
      onColorsChange([colorType]);
      return;
    }

    const isSelected = selectedColors.includes(colorType);

    if (isSelected) {
      onColorsChange(
        selectedColors.filter((color) => color !== colorType)
      );

      return;
    }

    onColorsChange([...selectedColors, colorType]);
  };

  const visibleColors = availableColors?.length
    ? colors.filter((color) => availableColors.includes(color.type))
    : colors;

  return (
    <ul className="color-block">
      {visibleColors.map(({ type, color }) => (
        <li key={type}>
          <ColorCycle
            color={color}
            name={type}
            isActive={selectedColors.includes(type)}
            onSelect={handleColorSelect}
          />
        </li>
      ))}
    </ul>
  );
}
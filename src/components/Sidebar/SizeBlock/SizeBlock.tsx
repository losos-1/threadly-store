import SizeBtn from '@/components/UI/SizeBtn';

import './SizeBlock.scss';

const sizeTypes = [
  'XX-Small',
  'X-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large',
  '3X-Large',
  '4X-Large',
];

type SizeBlockProps = {
  selectedSizes: string[];
  onSizesChange: (sizes: string[]) => void;
  availableSizes?:string[];
  multiple?:boolean,
};

export default function SizeBlock({
  selectedSizes,
  onSizesChange,
  availableSizes,
  multiple = false,
}: SizeBlockProps) {
  const handleSizeSelect = (size: string) => {

    if (!multiple) {
      onSizesChange([size]);
      return;
    }
    const isSelected = selectedSizes.includes(size);

    if (isSelected) {
      onSizesChange(
        selectedSizes.filter((item) => item !== size),
      );
      return;
    }

    onSizesChange([...selectedSizes, size]);
  };
  const visibleSize = availableSizes?.length
  ? sizeTypes.filter((size) => availableSizes.includes(size))
  : sizeTypes
  
  return (
    <div className="size-block">
      {visibleSize.map((type) => (
        <SizeBtn
          key={type}
          name={type}
          isActive={selectedSizes.includes(type)}
          onSelect={handleSizeSelect}
        />
      ))}
    </div>
  );
}

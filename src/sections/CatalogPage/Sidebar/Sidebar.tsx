import { useState } from 'react';

import filterSvg from '@/assets/icons/UI/filter.svg';
import ColorBlock from '@/components/Sidebar/ColorBlock';
import PriceBlock from '@/components/Sidebar/PriceBlock';
import SidebarBlock from '@/components/Sidebar/SidebarBlock';
import SizeBlock from '@/components/Sidebar/SizeBlock';
import Button from '@/components/UI/Button';
import {
  DEFAULT_CATALOG_FILTERS,
  type CatalogFilters,
} from '@/types/filters';

import './Sidebar.scss';

type SidebarProps = {
  onApply: (filters: CatalogFilters) => void;
};

export default function Sidebar({ onApply }: SidebarProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>(
    DEFAULT_CATALOG_FILTERS.colors,
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>(
    DEFAULT_CATALOG_FILTERS.sizes,
  );
  const [minPrice, setMinPrice] = useState<number>(
    DEFAULT_CATALOG_FILTERS.minPrice,
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    DEFAULT_CATALOG_FILTERS.maxPrice,
  );

  const handleApplyFilters = () => {
    onApply({
      colors: selectedColors,
      sizes: selectedSizes,
      minPrice,
      maxPrice,
      type: null,
    });
    
  };

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <h2 className="sidebar__title">Filter</h2>
        <img src={filterSvg} alt="" />
      </header>

      <div className="sidebar__blocks">
        <SidebarBlock title="Price">
          <PriceBlock
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </SidebarBlock>

        <SidebarBlock title="Colors">
          <ColorBlock
            selectedColors={selectedColors}
            onColorsChange={setSelectedColors}
            multiple
          />
        </SidebarBlock>

        <SidebarBlock title="Size">
          <SizeBlock
            selectedSizes={selectedSizes}
            onSizesChange={setSelectedSizes}
            multiple
          />
        </SidebarBlock>
      </div>

      <Button
        title="Apply Filter"
        variant="primary"
        size="average"
        onClick={handleApplyFilters}
      />
    </aside>
  );
}

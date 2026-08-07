import { useState, type ReactNode } from 'react';
import classNames from 'classnames';

import arrow from '@/assets/icons/arrow.svg';

import './SidebarBlock.scss';

type SidebarBlockProps = {
  title: string;
  children: ReactNode;
};

export default function SidebarBlock({
  title,
  children,
}: SidebarBlockProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleBlock = () => {
    setIsActive((previousValue) => !previousValue);
  };

  return (
    <article className="sidebar--block">
      <button
        type="button"
        className="sidebar--block__header"
        aria-expanded={isActive}
        onClick={handleBlock}
      >
        <h5>{title}</h5>
        <img
          src={arrow}
          alt=""
          className={classNames('sidebar--block__arrow', {
            'sidebar--block__arrow--active': isActive,
          })}
        />
      </button>

      {isActive && children}
    </article>
  );
}

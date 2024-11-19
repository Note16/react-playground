import { FC } from 'react';

export interface DropDownItemProps
{
  text?: string;
  isActive?: boolean;
  onClick: (target: string | undefined) => void;
}

const DropDownItem: FC<DropDownItemProps> = ({ text, isActive, onClick }) => {

  return (
    <span data-menu-item="viewed" className={isActive ? "active" : ""} onClick={() => onClick(text)}>{text}</span>
  )
}

export default DropDownItem

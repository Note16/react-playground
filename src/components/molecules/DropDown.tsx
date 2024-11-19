import { FC, ReactElement, useState } from 'react';
import './DropDown.scss'
import { DropDownItemProps } from '../atoms/DropDownItem';


interface DropDownProps
{
  text?: string
  children?: ReactElement<DropDownItemProps>[]
}

const DropDown: FC<DropDownProps> = ({ children, text }) => {
  const [isActive, setActive] = useState(false);
  
  const onClick = () => {
    setActive(!isActive); 
  }

  return (
    <span>
        <span className={ "dropdown-container " + (isActive ? "" : "hidden") }>
          <span>
            { children }
          </span>
        </span>
        <span className={"dropdown-link icon-" + (isActive ? "down" : "up")} onClick={onClick}>{ text }</span>
      </span>
  )
}

export default DropDown

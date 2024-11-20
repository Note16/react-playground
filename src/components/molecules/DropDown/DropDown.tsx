import { FC, useState } from 'react';
import './DropDown.scss'
import { Icons } from '../../atoms/AnimatedIcon/AnimatedIcon';

export interface IDropDownItem
{
  text: string;
  isActive?: boolean;
  icon: Icons;
}

interface DropDownProps
{
  items: IDropDownItem[]
  onItemClick: React.Dispatch<React.SetStateAction<IDropDownItem[]>>;
}

const DropDown: FC<DropDownProps> = ({ items, onItemClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const onDropDownClick = () => {
    setIsCollapsed(!isCollapsed);
  }
  
  const onDropDownItemClick = (target: string) => {
    onItemClick(items.map(item => {
      item.isActive = item.text == target
      return item;
    })); 
    setIsCollapsed(!isCollapsed);
  }

  return (
    <span>
      <span className={ "dropdown-container " + (isCollapsed ? "" : "hidden") }>
        <span>
          {
            items.map(item => {
              return <button 
                key={item.text} 
                className={item.isActive ? "active" : ""} 
                onClick={() => onDropDownItemClick(item.text)}
              >{item.text}</button>
            })
          }
        </span>
      </span>
      <button className={"dropdown-link icon-" + (isCollapsed ? "down" : "up")} onClick={onDropDownClick}>
        { 
          items.find(item => item.isActive)?.text 
        }
      </button>
    </span>
  )
}

export default DropDown

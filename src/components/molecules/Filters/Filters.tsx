import { FC } from 'react';
import './Filters.scss'

interface ListProps
{
  items: {text:string; isActive?: boolean}[]
  onItemClick: React.Dispatch<React.SetStateAction<({
      text: string;
      isActive: boolean;
    } | {
      text: string;
      isActive: undefined;
    })[]>>;
}

const Filters: FC<ListProps> = ({ items, onItemClick }) => {
  const onFilterItemClick = (target: string) => {
    onItemClick(items.map(item => {
      item.isActive = item.text == target
      return item;
    })); 
  }
  return (
    <span className="filters">
      {
        items.map(item => {
          return <button 
            key={item.text} 
            className={item.isActive ? "active" : ""} 
            onClick={() => onFilterItemClick(item.text)}
          >{item.text}</button>
        })
      }
    </span>
  )
}

export default Filters

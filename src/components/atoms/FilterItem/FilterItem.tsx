import { FC } from 'react';
import './ListItem.scss';

export interface ListItemProps
{ 
    text: string, 
    subText: string, 
    href?: string, 
    target?: '_blank' 
}

const ListItem: FC<ListItemProps> = ({ text, subText, href, target }) => {
  return (
    <li>
        <a href={href} target={target}>
            {text}
            <span>{subText}</span>
        </a>
    </li>
  )
}

export default ListItem

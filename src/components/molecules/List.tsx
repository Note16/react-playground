import { FC, ReactElement } from 'react';
import './List.scss'
import { ListItemProps } from '../atoms/ListItem';

interface ListProps
{
  children: ReactElement<ListItemProps>[]
}

const ListItem: FC<ListProps> = ({ children }) => {
  return (
    <ol>
        { children }
    </ol>
  )
}

export default ListItem

import { FC } from 'react';

interface MenuProps
{
  children: string | JSX.Element | JSX.Element[]
}

const Menu: FC<MenuProps> = ({ children }) => {
  return (
    <div>
        { children }
    </div>
  )
}

export default Menu

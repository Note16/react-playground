import { FC, useContext, useState } from 'react';
import "./Header.scss"
import AnimatedIcon from '../molecules/AnimatedIcon';
import DropDown from '../molecules/DropDown';
import DropDownItem from '../atoms/DropDownItem';
import PageContext from '../../context/PageContext';

interface HeaderProps
{
  children?: string | JSX.Element | JSX.Element[]
}

const Header: FC<HeaderProps> = () => {
  const [menuItems, setMenuItems] = useState([
      {text: 'MOST VIEWED', isActive: true},
      {text: 'RECENT RELEASE'},
      {text: 'POPULAR ONGOING'}
    ]
  )

  const onClick = (target: string) => {
    setMenuItems(menuItems.map(item => {
      item.isActive = item.text == target
      return item;
    })); 
  }

  return (
    <header>
      <AnimatedIcon icon='pig-walk' />
      <div className="content">
          <DropDown text='MOST VIEWED'>
            {
              menuItems.map(item => <DropDownItem text={item.text} isActive={item.isActive} onClick={() => onClick(item.text)} />)
            }
          </DropDown>
          <span data-filters className="filters"></span>
      </div>
    </header>
  )
}

export default Header

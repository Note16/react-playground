import './App.scss'
import ListItem from './components/atoms/ListItem/ListItem'
import List from './components/molecules/List/List'
import PageContext from './context/PageContext'
import AnimatedIcon from './components/atoms/AnimatedIcon/AnimatedIcon'
import DropDown, { IDropDownItem } from './components/molecules/DropDown/DropDown'
import { useEffect, useState } from 'react'
import Filters from './components/molecules/Filters/Filters'



function App() {
  const [menuItems, setMenuItems] = useState<IDropDownItem[]>([
      { text: 'MOST VIEWED', isActive: true, icon: 'chicken-idle' },
      { text: 'RECENT RELEASE', icon: 'duck-idle' },
      { text: 'POPULAR ONGOING', icon: 'pig-run' }
    ]
  )
  const [filterItems, setFilterItems] = useState([
      { text: 'Year' },
      { text: 'Month', isActive: true },
      { text: 'Day' }
    ]
  )

  useEffect(() => {
    console.log('yeay')
  }, [])

  return (
    <PageContext.Provider value={{}}>
      <header>
        <AnimatedIcon icon={menuItems.find(item => item.isActive)!.icon} />
        <div className="content">
            <DropDown items={menuItems} onItemClick={setMenuItems} />
            <Filters items={filterItems} onItemClick={setFilterItems} />
        </div>
      </header>
      <main>
        <List>
          <ListItem href='#' target='_blank' text='joepie' subText='de poepie'></ListItem>
          <ListItem href='https://www.google.nl' target='_blank' text='joepie2' subText='de poepie'></ListItem>
        </List>
      </main>
      <footer />
    </PageContext.Provider>
  )
}

export default App

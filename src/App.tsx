//import { useState } from 'react'
import './App.scss'
import ListItem from './components/atoms/ListItem'
import List from './components/molecules/List'
import Main from './components/templates/Main'
import Header from './components/templates/Header'
import Footer from './components/templates/Footer'
import PageContext from './context/PageContext'
import { useState } from 'react'

function App() {

  return (
    <>
    <PageContext.Provider value={{}}>
      <Header />
      <Main>
        <List>
          <ListItem href='#' target='_blank' text='joepie' subText='de poepie'></ListItem>
          <ListItem href='#' target='_blank' text='joepie2' subText='de poepie'></ListItem>
        </List>
      </Main>
      <Footer />
    </PageContext.Provider>
    </>
  )
}

export default App

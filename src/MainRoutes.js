import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import NotFoundPage from './components/NotFoundPage'
import TodoList from './components/TodoList'

const MainRoutes = () => {
  return (
	<Routes>
		<Route path='/' element={<TodoList />}/>

		<Route path='*' element={<NotFoundPage />}/>
	</Routes>
  )
}

export default MainRoutes

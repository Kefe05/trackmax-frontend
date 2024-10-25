import './App.css'
import Dashboard from './Dashboard/dashboard'
import Expense from './Expense/expense'
import Productivity from './Productivity/productivty'
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {RootLayout} from './RouteLayout/routeLayout'
import Login from './Forms/login'
import Register from './Forms/register'
import Index from './index'
import Project from './project/project'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
      <Route index exact element={<Index />} />
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      <Route path='/expense-tracker' exact element={<Expense />} />
      <Route path='/productivity-tracker' exact element={<Productivity />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/register' exact element={<Register />} />
      <Route path='/projects' exact element={<Project />} />
     </Route>
    )
  )
  
  return (
   
   <RouterProvider router={router}/>
  )
}

export default App

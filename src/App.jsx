import {Routes, Route} from "react-router-dom"
import AuthLayout from './components/auth/layout'
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import Admindashboards from "./pages/admin-view/dashboards"
import Adminfeatures from "./pages/admin-view/features"
import Adminorders from "./pages/admin-view/orders"
import Adminproducts from "./pages/admin-view/products"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingListing from "./pages/shopping-view/listing"

function App() {

  return (
      <div className='flex flex-col overflow-hidden bg-white'>

        {/* <h1>Header Component</h1>   */}
        <Routes>
          <Route path='/auth' element={<AuthLayout/>}>
            <Route path="login" element={<AuthLogin/>}/>
            <Route path="register" element={<AuthRegister/>}/>

          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<Admindashboards/>}/>
            <Route path='feature' element={<Adminfeatures/>}/>
            <Route path='order' element={<Adminorders/>}/>
            <Route path='product' element={<Adminproducts/>}/>
          </Route>
          <Route path='/shop' element={<ShoppingLayout/>}>
            <Route path='account' element={<ShoppingAccount/>}/>
            <Route path='checkout' element={<ShoppingCheckout/>}/>
            <Route path='home' element={<ShoppingHome/>}/>
            <Route path='listing' element={<ShoppingListing/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </div>
  )
}

export default App

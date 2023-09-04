import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll, Legal } from '../views/index';
import BaseLayout from "../layouts/BaseLayout";
import Scroll from '../components/common/ScrollToTop'
import {Toaster} from 'react-hot-toast'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Scroll>
      <Routes>
        <Route path = "/" element = { <BaseLayout /> }>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/error" element = { <Error /> } />
          <Route path = "/games" element = { <ViewGameAll /> } />
          <Route path = "/games/:gameId" element={<ViewGameDetails />} />
          <Route path = "/stores" element={<ViewStoreAll />} />
          <Route path = "/stores/:storeId" element={<ViewStoreDetails />} />
          <Route path = "/creators" element = { <ViewCreatorAll />} />
          <Route path="/terms" element={<Legal/>}/>
          <Route path = "*" element = { <Error />} />
        </Route>
      </Routes>
      </Scroll>
      <Toaster/>
    </BrowserRouter>
  )
}

export default AppRouter

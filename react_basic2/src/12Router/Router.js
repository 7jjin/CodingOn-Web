import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import User from './User';
import Redirect from './Redirect';
import UserDetail from './UserDetail';
import NotFound from './404';
import App from '../App';
import Error from './Error';
import Comment from './Comment';

// var1
// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header></Header>
//         <Routes>
//           <Route path='/' element={<Home></Home>} />
//           <Route path='/about' element={<About></About>} />
//           <Route path='/user' element={<User></User>} />
//           <Route path='/user/:userId' element={<UserDetail></UserDetail>} />
//           <Route path='/redirect' element={<Redirect></Redirect>} />
//           <Route path='*' element={<NotFound></NotFound>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// var2
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', // 자식에는 부모에서 선언한 "/"는 선언하지 않는다.
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'redirect',
        element: <Redirect />,
      },
    ],
    // 에러 페이지
    errorElement: <NotFound />,
  },
  {
    path: '/user',
    element: <App />,
    children: [
      {
        path: '',
        element: <User />,
      },
      {
        path: ':userId',
        element: <UserDetail />,
        children: [
          {
            path: 'comment',
            element: <Comment />,
          },
        ],
      },
    ],
  },
]);

export default Router;

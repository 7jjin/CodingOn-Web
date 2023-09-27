// import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
// import PR_user from './PR_user';
// import PR_navbar from './PR_navbar';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: 'student',
//         element: <PR_navbar />,
//         children: [
//           {
//             path: ':userId',
//             element: <PR_user />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

// export default Router;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PR_navbar from './PR_navbar';
import PR_user from './PR_user';

export default function RouterPrac1() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PR_navbar />} />
          <Route path='/student/:name' element={<PR_user />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

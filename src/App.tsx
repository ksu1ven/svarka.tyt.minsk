import { LandingPage } from './pages/LandingPage';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<main>error page</main>} />
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

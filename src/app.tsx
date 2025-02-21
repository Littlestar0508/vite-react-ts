import { BrowserRouter, Routes, Route } from 'react-router';

import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
import Playground from './pages/playground/page';
// import Playground from './playground';
// import { useCountStore } from './stores/count';

function App() {
  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          {/* switch */}
          <Routes>
            <Route path="/playground" element={<Playground />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <output className="block text-6xl pl-4 mt-2 border">{count}</output> */}
        {/* <Playground /> */}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

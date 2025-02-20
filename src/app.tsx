import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider, ThemeSetters, type ThemeMode } from './contexts/theme';
import PrintError from './pages/auto-headings-level/components/error';
import Playground from './playground';

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  const themeContextValue = { mode: themeMode, setMode: setThemeMode };

  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

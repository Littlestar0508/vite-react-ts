import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';

function App() {
  // 앱 상태 관리(테마 or 인증 UI 전체 단위 제어)

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

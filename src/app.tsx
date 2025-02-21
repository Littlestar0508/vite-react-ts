import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
// import { useCountStore } from './stores/count';

function App() {
  // 앱 상태 관리(테마 or 인증 UI 전체 단위 제어)

  // 컴포넌트 Zustand 스토어 훅 사용 바인딩
  // const count = useCountStore(({ count }) => count);

  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        {/* <output className="block text-6xl pl-4 mt-2 border">{count}</output> */}
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

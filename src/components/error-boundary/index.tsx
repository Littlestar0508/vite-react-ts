import { Component, type ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: null | Error;
  errorInfo: null | ErrorInfo;
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
    errorInfo: null,
    hasError: false,
  };

  // 오류 감지하기 위한 라이프 사이클 메서드
  static getDerivedStateFromError(error: Error) {
    // 상태 업데이트
    return {
      hasError: true,
      error,
    };
  }

  render() {
    // 대체(fallback) UI를 렌더링(Error O)
    if (this.state.hasError) {
      const { error } = this.state;

      return (
        <div role="alert" lang="en">
          <h2>{error?.name} 오류 발생!!!</h2>
          <p>{error?.message}</p>
        </div>
      );
    }

    // 하위 컴포넌트 렌더링(Error X)
    return this.props.children;
  }
}

export default ErrorBoundary;

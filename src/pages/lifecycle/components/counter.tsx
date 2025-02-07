// 클래스 컴포넌트 라이프 사이클
import { Component } from 'react';
import { tm } from '@/utils/tw-merge';

// 속성(props)
interface Props {
  count?: number;
  step?: number;
  min?: number;
  max?: number;
}

// 상태(state)
interface State {
  count: number;
}

export default class Counter extends Component<Props, State> {
  static defaultProps: Required<Props> = {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
  };

  // 생성(constructor) 시점
  constructor(props: Props) {
    // 반드시 호출되어야 함
    // React.Component 클래스를 슈퍼 클래스로 사용할때 props로 전달해야함
    super(props);

    // 컴포넌트 상태 선언
    // 클래스 인스턴스 멤버
    // this.state = {
    //   count: props.count ?? Counter.defaultProps.count,
    // };

    // this 바인딩
    // this.handleDecrease = this.handleDecrease.bind(this);
    // this.handleIncrease = this.handleIncrease.bind(this);
  }

  // 클래스 필드
  state = {
    count: this.props.count ?? Counter.defaultProps.count,
  };

  // 렌더 시점
  render() {
    // 컴포넌트 데이터(속성, 상태) 접근 가능
    return (
      <div className={tm('flex flex-col gap-3 items-start')}>
        <h2>카운터</h2>
        <output>{this.state.count}</output>
        <div className={tm('flex gap-2')}>
          <button type="button" onClick={this.handleIncrease}>
            +{this.props.step}
          </button>
          <button type="button" onClick={this.handleDecrease}>
            -{this.props.step}
          </button>
        </div>
      </div>
    );
  }

  // 클래스 필드
  clearIntervalId: NodeJS.Timeout | number = 0;

  // 컴포넌트 마운트(componentDidMount)
  componentDidMount(): void {
    // 리액트 렌더링 프로세스와 상관 없는 이펙트 실행
    // const clearId =
    // 이벤트 구독
    this.clearIntervalId = setInterval(() => {
      console.log(new Date().toLocaleDateString());
      // alert('타이머(사이드 이펙트) 처리');
      // clearTimeout(clearId);
      // console.log('타이머 클리어!');
    }, 1000);
  }

  // 컴포넌트 업데이트(component did update) 이후 시점
  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    console.group('이전 상태값');
    // console.log({ prevProps });
    console.log({ prevState });
    console.groupEnd();
    console.group('현재 상태값');
    console.log(this.state);
    console.groupEnd();

    // 사이드 이펙트
    if (this.state.count > 9) {
      document.body.classList.add('bg-react', 'text-white');
    } else {
      document.body.classList.remove('bg-react', 'text-white');
    }
  }

  // 컴포넌트 언마운드(component will unmount) 이전 시점
  componentWillUnmount(): void {
    console.log('Counter Will Be Unmount');

    // 타이머 이벤트 구독 해지
    clearInterval(this.clearIntervalId);
  }

  // 클래스 필드
  // 이벤트 핸들러
  handleDecrease = () => {
    // console.log('감소', this);
    const { step } = this.props;
    if (step) {
      this.setState({
        count: this.state.count - step,
      });
    }
  };
  handleIncrease = () => {
    // console.log('증가', this);
    const { step } = this.props;
    if (step) {
      this.setState({
        count: this.state.count + step,
      });
    }
  };
}

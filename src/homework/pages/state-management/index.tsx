import AccordionList from './components/accordion-list';

export default function StateManagement() {
  return (
    <section className="transform">
      <h2 className="sr-only">상태 관리</h2>
      <AccordionList title="넷플릭스 서비스" />
      <DoNotRender />
    </section>
  );
}

// 이 함수도 부모 상태에 따라 리렌더링이 발생
// 따라서 상태 끌어내리기 필요
function DoNotRender() {
  return (
    <article>
      <h3>나는 상태 공유를 원하지 않아요</h3>
      <p>상태 공유하고 싶지 않습니다</p>
    </article>
  );
}

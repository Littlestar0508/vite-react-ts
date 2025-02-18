import useDocumentTitle from '@/hooks/use-document-title';
import { useEffect } from 'react';

export default function CustomHookPage() {
  useDocumentTitle('커스텀 훅');

  useEffect(() => {
    document.title = '커스텀 훅 (로직 재사용) | React 플레이그라운드';
  }, []);

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-medium text-2xl">사용자 정의 훅 함수(Custom Hook)</h2>
    </section>
  );
}

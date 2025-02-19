import AnotherChild from './another-child';

export default function AnotherParent() {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <AnotherChild />
    </div>
  );
}

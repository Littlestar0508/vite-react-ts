import GrandChild from './grand-child';

export default function Child() {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <GrandChild />
    </div>
  );
}

import Child from './child';

export default function Parent() {
  return (
    <div className="flex-1 p-5 border-4 rounded-full flex justify-center">
      <Child />
    </div>
  );
}

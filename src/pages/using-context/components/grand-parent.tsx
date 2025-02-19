import Parent from './parent';

export default function GrandParent() {
  return (
    <div className="p-5 border-4 rounded-full flex justify-center">
      <Parent />
    </div>
  );
}

export default function Message({ greeting }: { greeting: string }) {
  console.log('렌더링', greeting);
  return <div>{greeting}</div>;
}

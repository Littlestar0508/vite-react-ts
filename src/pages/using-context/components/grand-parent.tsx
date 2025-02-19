import Parent from './parent';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function GrandParent({ message, setMessage }: Props) {
  return (
    <div className="p-5 border-4 rounded-full flex justify-center">
      <Parent message={message} setMessage={setMessage} />
    </div>
  );
}

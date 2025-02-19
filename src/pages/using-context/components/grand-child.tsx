interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function GrandChild({ message, setMessage }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-3 p-5 border-4 rounded-full justify-center text-center">
      {message}
      <button
        type="button"
        onClick={() => {
          setMessage('반갑습니다. 페이지!');
        }}
        className="bg-react text-white p-2 text-sm rounded-full"
      >
        PageComponent에게 인사하기
      </button>
    </div>
  );
}

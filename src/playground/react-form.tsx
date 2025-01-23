import { useState } from 'react';
import FormInput from '@/components/form-input';

const formStyles = {
  display: 'flex',
  flexFlow: 'column',
  gap: 20,
  alignItems: 'center',
};

function ReactForm() {
  const [age, setAge] = useState(22);
  const [color, setColor] = useState('#AEBEEF');
  const [limitAge, setLimitAge] = useState(40);

  return (
    <div className="ReactForm">
      <h2>React 폼(form)</h2>
      <form style={formStyles}>
        {/* type=text */}
        <FormInput type="text" label="이름" placeholder="박수무당" />
        <FormInput
          type="password"
          label="비밀번호"
          placeholder="영어, 숫자 조합 4자리 이상"
        />
        {/* type=number */}
        <FormInput
          type="number"
          label="나이"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            const nextAgeValue: number = parseInt(value, 10);
            setAge(nextAgeValue);
          }}
          readOnly={false}
          data-name="폼 인풋"
          data-type="input"
          title="컴포넌트 만세!"
        />
        {/* type=email */}
        <FormInput type="email" label="이메일" placeholder="user@company.io" />
        {/* type=color */}
        <FormInput
          type="color"
          label="색상"
          value={color}
          onChange={(e) => {
            const { value } = e.target;
            setColor(value);
          }}
        />
        {/* type=label */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FormInput
            type="range"
            label="시청 허용 나이"
            min={10}
            max={90}
            value={limitAge}
            step={10}
            onChange={(e) => {
              const { value } = e.target;
              setLimitAge(+value);
            }}
            title={`현재 값 : ${limitAge}세`}
          />
          <output>{limitAge}</output>
        </div>

        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default ReactForm;

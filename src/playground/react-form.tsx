import { useState } from 'react';
import FormInput from '@/components/form-input';

const formStyles = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'start',
  gap: 20,
};

function ReactForm() {
  const [age, setAge] = useState<number>(22);
  const [color, setColor] = useState<string>('#2483DB');
  const [limitAge, setLimitAge] = useState<number>(40);
  const [profileImg, setProfileImg] = useState<FileList | null>(null);

  return (
    <div className="ReactForm">
      <h2>React 폼(form)</h2>
      <form style={formStyles}>
        {/* type=file */}
        <div style={{ border: '0.5px solid rgba(0 0 0 / 50%', padding: 12 }}>
          <FormInput
            label="프로필"
            type="file"
            accept="image/*"
            multiple
            // onChange={(e) => {
            //   if (e.target.files) {
            //     const { target: element } = e;
            //     if (element.files && element.files.length > 0) {
            //       const [profileImage] = element.files;
            //       console.log(profileImage); // File
            //       // 명령형 프로그래밍을 이용하여 이미지 렌더링
            //       const profileImagePath = URL.createObjectURL(profileImage);
            //       console.log(profileImagePath);

            //       // target(input:file)의 부모
            //       const parentElement = element.parentElement!;
            //       parentElement.querySelector('img')?.remove();

            //       const imgElement = document.createElement('img');
            //       imgElement.setAttribute('src', profileImagePath);
            //       imgElement.setAttribute('alt', '업로드 할 프로필');
            //       imgElement.style.cssText = `width:100px; height:100px;`;
            //       parentElement.append(imgElement);
            //     }
            //   }
            // }}

            // 선언적 프로그래밍
            onChange={(e) => {
              const { files } = e.target;

              if (files && files.length > 0) {
                setProfileImg(files);
              }
            }}
          />

          {/* 업로드 할 이미지 표시 */}
          {profileImg &&
            Array.from(profileImg).map((item, index) => {
              return (
                <img
                  key={index}
                  style={{ marginBlockStart: 8 }}
                  src={URL.createObjectURL(item)}
                  alt="업로드 할 프로필"
                  width={100}
                  height={100}
                />
              );
            })}
        </div>

        {/* type=text */}
        <FormInput
          // type="text"
          label="이름"
          placeholder="박수무당"
        />

        {/* type=password */}
        <FormInput
          type="password"
          label="비밀번호"
          placeholder="영어, 숫자 조합 4자리 이상"
        />

        {/* type=email */}
        <FormInput type="email" label="이메일" placeholder="user@company.io" />

        {/* type=number, controlled component */}
        <FormInput
          type="number"
          label="나이"
          value={age}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            // const nextAgeValue: number = +value;
            // const nextAgeValue: number = Number(value);
            const nextAgeValue: number = parseInt(value, 10);
            setAge(nextAgeValue);
          }}
        />

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

        {/* type=range */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <FormInput
            type="range"
            label="시청 허용 나이"
            min={10}
            max={90}
            step={10}
            value={limitAge}
            onChange={(e) => {
              const { value } = e.target;
              setLimitAge(parseInt(value, 10));
            }}
          />
          <output>{limitAge}</output>
        </div>

        {/* type=radio */}
        <fieldset>
          <legend>성별</legend>
          <FormInput
            type="radio"
            label="남성"
            name="usergender"
            value="male"
            defaultChecked
          />
          <FormInput
            type="radio"
            label="여성"
            name="usergender"
            value="female"
          />
        </fieldset>

        {/* type=checkbox */}
        <fieldset>
          <legend>취미</legend>
          <FormInput
            type="checkbox"
            label="공부"
            name="userhobby"
            value="study"
            defaultChecked
          />
          <FormInput
            type="checkbox"
            label="운동"
            name="userhobby"
            value="helth"
          />
          <FormInput
            type="checkbox"
            label="영화 감상"
            name="userhobby"
            value="watch-a-movie"
          />
        </fieldset>

        {/* type=date */}
        <FormInput type="date" label="여행 날짜" />
        {/* type=datetime-local */}

        <FormInput type="datetime-local" label="비행기 출국 시간" />

        <button type="submit">제출</button>
        {/* <button type="reset">초기화</button> */}
        <input type="reset" value="초기화" />
      </form>
    </div>
  );
}

export default ReactForm;

import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // handleSubmit(): 두개의 함수를 받는데, 하나는 유효할 때 실행되는 함수(필수), 다른 하나는 유효하지 않을 때 실행되는 함수(선택)
  const onValid = (data) => {
    console.log('onValid', data);
  };

  //   const onInValid = (err) => {
  //     console.log('onInvalid', err);
  //   };

  console.log('Errors', errors);
  //   console.log('watch', watch('username'));

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        {/* register 뒤에 option들은 객체 형태로 쓴다. */}
        <input
          type='text'
          {...register('username', {
            required: '이름을 입력하세요',
            minLength: { message: '최소 2글자 이상 작성하세요', value: 2 },
          })}
        ></input>
        {/* 실시간으로 에러를 처리하기 위한 errors 사용 */}
        {errors.username?.message}
        <br />
        <input
          type='text'
          {...register('email', {
            required: '이메일을 입력하세요',
            validate: { useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다.' },
          })}
        ></input>
        {errors.email?.message}
        <br />
        <input type='text' {...register('password')}></input>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

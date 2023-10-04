import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  console.log('error', errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input type='text' {...register('username', { required: '이름은 필수 항목입니다.' })}></input>
        {errors.username && <div style={{ color: 'red' }}>{errors.username.message}</div>}
        <br />
        <input
          type='text'
          {...register('age', { validate: { useNumber: (v) => Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.' } })}
        ></input>
        {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
        <br />
        <button type='submit'>제출</button>
      </form>
    </>
  );
}

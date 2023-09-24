import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdateList() {
  // 배열을 추가하고 싶은면 무조건 초기값을 빈배열로 선언
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // DOM 생성할 때 axios로 데이터 불러오기
  useEffect(() => {
    // useEffect는 비동기 함수를 직접적으로 지원하지 않음.
    // 비동기함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
    const axiosUser = async () => {
      const result = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      });

      setUsers(result.data);
      setLoading(true);
    };
    axiosUser();

    return () => {
      console.log('연결 해제 완료');
    };
  }, []);

  // DOM업데이트 될 때마다
  useEffect(() => {
    console.log('유저 정보 업데이트', users.length);
  }, [users]);

  return (
    <>
      {loading ? (
        <ul>
          {users.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  {item.name} - {item.email}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}

import { useParams, useSearchParams } from 'react-router-dom';

export default function PR_user() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('name');

  return (
    <div>
      학생의 이름은 <span style={{ color: 'green' }}>{name}</span>
      {keyword !== null && (
        <div>
          실제 이름은 <span>{keyword}</span> 입니다.
        </div>
      )}
    </div>
  );
}

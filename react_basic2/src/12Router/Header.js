import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  //useNavigate(): Link컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    navi('/Redirect');
  };

  // Link: 유저가 직접 클릭
  return (
    <div>
      <ul>
        <li>
          {/* a 태그 대신에 Link를 쓰고 href 대신에 to를 쓴다. */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
        <li>
          <button onClick={onClick}>Redirect</button>
        </li>
      </ul>
    </div>
  );
}

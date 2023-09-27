import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  const navi = useNavigate();

  useEffect(() => {
    navi('/user');
  }, []);
  return <div>Redirect</div>;
}

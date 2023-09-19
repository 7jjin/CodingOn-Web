import gulee from './gulee.jpg';

function FunctionBook(props) {
  return (
    <>
      <div className='wrapper'>
        <h2>이번주 베스트셀러</h2>
        <img src={gulee} width={'100px'}></img>
        <h3>{props.title}</h3>
        <div className='inner'>
          <div>저자: {props.author}</div>
          <div>판매가: {props.price}</div>
          <div>구분: {props.type}</div>
        </div>
      </div>
    </>
  );
}

export default FunctionBook;

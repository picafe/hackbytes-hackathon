import authorsData from './authors.json';
import './authors.css'

const Authors = ({ authors }) => {
  const authorItems = authors.map((authorName) => {
    const author = authorsData.find((a) => a.name === authorName);
    return (
      <div className='author-container' key={authorName}>
        <img className='author-pfp' src={author.img}/>
        <div className='author-description'>
            <h3 className='author-name'>{authorName}</h3>

            <p className='author-title'>{author ? author.title : 'Description not found'}</p>
        </div>
        
        
      </div>
    );
  });

  return <div>{authorItems}</div>;
};

export default Authors;

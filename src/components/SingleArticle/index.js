import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = () => {
  const { id: articleId } = useParams();
  const article = useSelector(state => {
    const articles = state.articleState.entries;
    return articles.find(article => article.id === articleId);
  });
  const { title, imageUrl, body } = article;

  return (
    <div className='singleArticle'>
      <h1></h1>
      <img
        src={imageUrl}
        alt={title}
      />
      <p>
       {body}
      </p>
    </div>
  );
};

export default SingleArticle;

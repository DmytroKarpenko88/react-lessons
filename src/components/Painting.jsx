import defaultImage from './default.jpg';
import PropTypes from 'prop-types';

const Painting = ({
  url = defaultImage,
  title,
  profileUrl,
  author = 'unknown',
  price,
  quantity,
}) => {
  return (
    <div>
      <img src={url ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>The price: {price} of loads</p>
      <p>Accessibility: {quantity < 10 ? 'running out' : 'in stock'}</p>
      <button type="button">Add to card</button>
    </div>
  );
};

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;

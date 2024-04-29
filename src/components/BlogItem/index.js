import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, title, topic, author, avatarUrl, imageUrl} = blogsData
  return (
    <Link to={`/blogs/${id}`}>
      <li className="list-Item-container">
        <div className="blogs-container">
          <img src={imageUrl} className="image" alt={`item${id}`} />
          <div className="blogs-details">
            <h1 className="topic">{topic}</h1>
            <p className="title">{title}</p>
            <div className="author-and-name">
              <img
                src={avatarUrl}
                className="avatar-image"
                alt={`avatar${id}`}
              />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem

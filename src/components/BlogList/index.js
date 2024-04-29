import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getBlogsItem()
  }

  getBlogsItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
      imageUrl: eachItem.image_url,
    }))
    this.setState({blogsData: formattedData})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsData.map(eachItem => (
            <BlogItem blogsData={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList

import './ExplorePage.css'
import post1 from '../../shared/assets/giphy.gif'
import post2 from '../../shared/assets/baby.webp'
import post3 from '../../shared/assets/cats.gif'
import post4 from '../../shared/assets/prog.gif'
import post5 from '../../shared/assets/good.webp'
import post6 from '../../shared/assets/bug.gif'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

const PostsPage = () => {
  const posts = [
    { id: 1, src: post1, type: 'reel', likes: '12.3K', comments: '620' },
    { id: 2, src: post2, type: 'reel', likes: '5.4K', comments: '220' },
    { id: 3, src: post3, type: 'photo', likes: '10.1K', comments: '1.2K' },
    { id: 4, src: post4, type: 'photo', likes: '7.8K', comments: '345' },
    { id: 5, src: post5, type: 'reel', likes: '9K', comments: '500' },
    { id: 6, src: post6, type: 'photo', likes: '1.1K', comments: '35' },
  ]

  return (
    <div className="explore">
      <div className="explore__grid">
        {posts.map(post => (
          <div className="explore__item" key={post.id}>
            <img src={post.src} alt={`Post ${post.id}`} />

            {post.type === 'reel' && (
              <div className="explore__reel-icon"><VideoLibraryIcon/></div>
            )}

            <div className="explore__likes">{post.likes}</div>
            <div className="explore__comments">{post.comments}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsPage

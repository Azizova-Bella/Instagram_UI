import React from 'react';
import './home.css';
import avatar1 from '../../shared/assets/baby.webp';
import avatar2 from '../../shared/assets/giphy.gif';
import postImg1 from '../../shared/assets/cats.gif';
import postImg2 from '../../shared/assets/baby.webp';
import postImg3 from '../../shared/assets/giphy.gif';

const HomePage = () => {
  const posts = [
    {
      id: 1,
      username: 'cats_winner_2023',
      avatar: avatar2,
      time: '• 14h',
      image: postImg1,
      caption: 'КОТОРУЮ...',
    },
    {
      id: 2,
      username: 'baby_love_0',
      avatar: avatar1,
      time: '• 2h',
      image: postImg2,
      caption: 'Самая милая улыбка 💖',
    },
    {
      id: 3,
      username: 'funny_reactions',
      avatar: avatar2,
      time: '• 5min',
      image: postImg3,
      caption: 'Когда увидел кота 🐱',
    },
  ];

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__main">
          <div className="stories">
            {Array(10).fill(null).map((_, i) => (
              <div className="story" key={i}>
                <div className="story__avatar">
                  <img src={avatar1} alt="story" className="story__img" />
                </div>
                <p className="story__name">baby_love_0</p>
              </div>
            ))}
          </div>

          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="post__header">
                <div className="post__avatar">
                  <img src={post.avatar} alt="user" className="post__avatar-img" />
                </div>
                <div className="post__info">
                  <span className="post__username">{post.username}</span>
                  <span className="post__time">{post.time}</span>
                </div>
              </div>
              <div className="post__video">
                <img src={post.image} alt="post" className="post__video-img" />
              </div>
              <div className="post__caption">
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="home__sidebar">
          <h3 className="suggestions__title">Suggested for you</h3>
          <ul className="suggestions__list">
            {Array(5).fill(null).map((_, i) => (
              <li className="suggestions__item" key={i}>
                <div className="suggestions__avatar">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt="user"
                    className="suggestions__avatar-img"
                  />
                </div>
                <div className="suggestions__info">
                  <p className="suggestions__username">user_{i + 1}</p>
                  <p className="suggestions__follow">Follow</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

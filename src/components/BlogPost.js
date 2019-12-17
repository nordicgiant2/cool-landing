import React from 'react';
import img from '../img/03.jpg';

const BlogPost = () => {
  return (
    <div className="blogpost">
        <div className="image-wrapper">
          <img className="responsive-img" src={img} />
        </div>
        <div className="content">
          <h4>This is a standard post</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, asperiores quod est tenetur in.</p>
        </div>
        <div className="footer">
          <div className="row">
            <div className="footer-content">
              <i className="material-icons">today</i>
              <span>Feb 26, 2019</span>
            </div>
            <div className="footer-content">
              <i className="material-icons">chat bubble outline</i>
              <a href="">6</a>
            </div>
          </div>
        </div>
        <div className="read-more">
          <a href="">Read more</a>
        </div>
    </div>
  );
};

export default BlogPost;

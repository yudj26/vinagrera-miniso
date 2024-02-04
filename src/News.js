import React from "react";
import "./News.css";

const NewsItem = ({ id, imageUrl, title, content }) => (
  <div className="newslayout">
    <div className="newsimgaes">
      <a href={`https://www.miniso.com/EN/News/Details?id=${id}`}>
        <img src={imageUrl} alt={title} />
      </a>
    </div>
    <h3 className="newstitle">{title}</h3>
    <div className="newsthems">
      <a href={`https://www.miniso.com/EN/News/Details?id=${id}`}>{content}</a>
    </div>
    <a href={`https://www.miniso.com/EN/News/Details?id=${id}`}>
      <img className="newsmore" src="images/grayarrow.png" alt="Read more" />
    </a>
  </div>
);

const News = ({ newsItems }) => (
  <div className="news">
    <div className="basetitle">News</div>
    <div className="newscontent clearfix">
      {newsItems.map((item) => (
        <NewsItem key={item.id} {...item} />
      ))}
    </div>
    <a href="https://www.miniso.com/EN/News" className="morebase">
      <img src="images/whitearrow.png" className="hideimg" alt="More news" />
      <img src="images/graylink.png" className="showimg" alt="More news" />
    </a>
  </div>
);

export default News;

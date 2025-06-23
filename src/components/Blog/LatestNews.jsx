

const LatestNews = ({ imageData, date, title, index, total }) => {
  return (
    <>
      <div className="latest-news-tile">
        <div className="latest-news-img">
          <img src={imageData?.imageUrl} alt={imageData?.alt} />
        </div>
        <div className="latest-news-info">
          <span className="date text-s">{date}</span>
          <h5>{title}</h5>
        </div>
      </div>

      {index < total - 1 && <div className="separator"></div>}
    </>
  );
};

export default LatestNews;

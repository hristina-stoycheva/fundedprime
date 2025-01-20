import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom"; // За извличане на параметъра slug
import { fetchPageData } from "../api"; // Функция за извличане на данни от WordPress API
import "../components/styles/Homepage.css";
import TextLeftImageRight from '../components/template-parts/TextLeftImageRight';
const HomeTemplate = () => {
  const { slug } = useParams(); // Извличаме slug от URL параметрите
  const [topvideo, setTopVideo] = useState(null);
  const currentSlug = slug || "home";
  const [loading, setLoading] = useState(true);
  const [imageRight, setImageright] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(currentSlug);
      console.log("Page data for slug:", currentSlug, data); // Проверете данните в конзолата
      setTopVideo(data.acf.top_video_section);
      setImageright(data.acf.text_right_image);
      setLoading(false);
    };
    getPageData();
  }, [currentSlug]); // Ще се изпълни всеки път, когато slug се промени
let TemplateComponent;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!topvideo) {
    return <div>No data available.</div>;
  }
  return (
    <div className="homepage">
      {/* TopVideo start */}
      <div className="topvideosection section">
        <div className="overlay"></div>

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={topvideo.video.url} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100  w100 flex-column justify-content-center">
            <div
              className="cwhite p-2 col-8"
              dangerouslySetInnerHTML={{ __html: topvideo.text }}
            />
            <div className="buttons-in-right col-8 p-2">
              {Object.entries(topvideo.buttons).map(([key, button]) => (
                <a
                  key={key}
                  href={button.button_url}
                  className={`funded-btn ${
                    key === "0"
                      ? "funded-purple-btn"
                      : "funded-purple-dark-btn ms-2"
                  }`}
                >
                  {button.button_text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* TopVideo end */}
      {/* image in right start */}
      <TextLeftImageRight text={imageRight.text} image={imageRight.image}/>
      <div className="section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="textcolumn col-7" dangerouslySetInnerHTML={{ __html: imageRight.text }} />
            <div className="imagecolumn col-5">
              <img className="imageRight" src={imageRight.image.url}/></div>
          </div>
        </div>
      </div>
      {/* image in right end */}

      {/* <div className="blocks" dangerouslySetInnerHTML={{ __html: content.rendered }} /> */}
    </div>
  );
};
export default HomeTemplate;

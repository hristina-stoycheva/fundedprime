import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom"; // За извличане на параметъра slug
import { fetchPageData } from "../api"; // Функция за извличане на данни от WordPress API
import "../components/styles/Homepage.css";
const HomeTemplate = () => {
  const { slug } = useParams(); // Извличаме slug от URL параметрите
  const [topvideo, setSection] = useState(null);
  const currentSlug = slug || "home";
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(currentSlug);
      // console.log("Page data for slug:", currentSlug, data); // Проверете данните в конзолата
      setSection(data.acf.top_video_section);
      setLoading(false);

    };
    getPageData();
  }, [currentSlug]); // Ще се изпълни всеки път, когато slug се промени
  // console.log(topvideo.video.url);

  let TemplateComponent;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!topvideo) {
    return <div>No data available.</div>;
  }
  return (
    <div className="topvideosection section">

<div className="overlay"></div>

<video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
  <source src={topvideo.video.url} type="video/mp4" />
</video>

<div className="container h-100">
  <div className="d-flex h-100 align-items-center w100">
  <div className="cwhite w100" dangerouslySetInnerHTML={{ __html: topvideo.text }} />
      <div className="buttons-in-right w-100">
          {Object.entries(topvideo.buttons).map(([key, button]) => (
            <a
              key={key}
              href={button.button_url}
              className={`funded-btn ${
                key === "0" ? "funded-white-btn" : "funded-black-btn ms-2"
              }`}
            >
              
              {button.button_text}
            </a>
          ))}
        </div>
  </div>
</div>
      
    </div>
  );
};
export default HomeTemplate;

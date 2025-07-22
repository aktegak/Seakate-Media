import { useState } from 'react';

const videos = [
  {
    title: "Hills Campus Tour",
    description: "A captivating tour of Hillsong College's Sydney campus.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753010172/hills-campus-tour_rjhxrc.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Hills_Campus_Tour_q3ubin.jpg"
  },
  {
    title: "Most Googled Questions about Hillsong College",
    description: "We answer the internet’s most asked questions about Hillsong.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013992/hillsong_college_questions_x5twmf.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Most_googled_Question_about_Hillsong_College_vv3bsq.jpg"
  },
  {
    title: "What’s on the Horizon?",
    description: "An inspiring look into the future at Hillsong College.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013988/what_is_on_the_horizon_jjb4en.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_What_s_on_the_Horizon_tyx10i.jpg"
  },
  {
    title: "Step into Your Calling 2024",
    description: "Promotional video inviting students to pursue their calling.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013977/Step-into-Your-Calling-2024_ljysuz.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Step_into_your_calling_ew7uvr.jpg"
  },
  {
    title: "Betania & Matthew Wedding Highlight",
    description: "A cinematic wedding highlight",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013975/Betania_Matthew_18_12_2021_1_Minute_Version_tjypgd.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Betania_Matthew_xlyw4j.jpg"
  },
  {
    title: "CHElZ Catering Promo",
    description: "Highlighting our work with a local catering company.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013948/CHElZ_Catering_pa7roq.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177670/Thumbnail_Chelz_Catering_drwfkm.jpg"
  },
  {
    title: "Paula & Andrew Wedding Highlight",
    description: "A 1-minute emotional wedding highlight with cinematic visuals.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753013972/Paula_Andrew_Wedding_1_Minute_Version_vncspt.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177027/Thumbnail_Paula_Andrew_zfqmjb.jpg"
  },
  {
   title: "Bethany Ward Testimony",
    description: "A Hillsong College testimony video featuring Bethany Ward.",
    videoSrc: "https://res.cloudinary.com/dbbtr8tl0/video/upload/v1753176669/Bethany_Ward_Testimony_qm_j7BOV8f4_iannle.mp4",
    poster: "https://res.cloudinary.com/dbbtr8tl0/image/upload/v1753177026/Testimony_Video_Hillsong_College_puljjt.jpg" 
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#0e1628] px-8 pt-28 pb-12 text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-cyan-400">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <div key={index} className="bg-[#0e1628] rounded-lg shadow-md">
            {activeIndex === index ? (
              <video
                controls
                autoPlay
                className="w-full rounded-lg"
                onPlay={() => setActiveIndex(index)}
                onPause={() => setActiveIndex(null)}
                poster={video.poster}
              >
                <source src={video.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={video.poster}
                alt={video.title}
                className="cursor-pointer w-full rounded-lg"
                onClick={() => setActiveIndex(index)}
              />
            )}
            <h3 className="text-cyan-400 text-xl font-semibold mt-4 mb-1 px-2">{video.title}</h3>
            <p className="text-gray-300 text-sm px-2 pb-4">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axiosInstance from '../../../../axiosConfig/instance';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BiX } from 'react-icons/bi';

function Video({ course }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(function () {
    axiosInstance.get('/videos').then((res) => {
      //console.log(res.data.data);
      setVideos(res.data.data);
    });
  }, []);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      {videos.map((video) => {
        return (
          <div key={video._id} className="relative">
            <video onClick={() => openModal(video)} width="373" height="300">
              <source
                src={`http://localhost:4000${video.videos[0]}`.replace(
                  '/public',
                  '',
                )}
                type="video/mp4"
              ></source>
            </video>
            <BsFillPlayCircleFill
              className="absolute left-40 top-20 cursor-pointer text-5xl  text-black"
              onClick={() => openModal(video)}
            />
            <h6 className="absolute bottom-3 left-28 font-bold text-black">
              Preview this course
            </h6>
          </div>
        );
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="overlay"
        contentLabel="Video Modal"
      >
        <h6 className="absolute left-1/3 top-32 font-bold text-gray-300 ">
          Preview this course
        </h6>
        <h5 className="absolute left-1/3 top-40 font-bold text-white ">
          {course.title}
        </h5>
        <BiX className="close-modal text-white" onClick={closeModal} />

        {selectedVideo && (
          <video
            className="show-modal"
            width="100%"
            height="100%"
            controls
            autoPlay
          >
            <source
              src={`http://localhost:4000${selectedVideo.videos[0]}`.replace(
                '/public',
                '',
              )}
              type="video/mp4"
            ></source>
          </video>
        )}
      </Modal>
    </div>
  );
}

export default Video;

import React, { useEffect, useState } from 'react';
import MemberCard from './MemberCard';
import MemberBigImage from './MemberBigImage';
import type { Members } from '../../type/members';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  members: Members[];
  selectedMember: Members;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const SelectMember: React.FC<Props> = ({ members, setImage, setShow, setName }) => {
  const [showSlider, setShowSlider] = useState(true);
  const [hasResized, setHasResized] = useState(false);

  const firstRow = members.slice(0, 6);
  const leftRow = firstRow.slice(0, 3);
  const rightRow = firstRow.slice(3);

  const secondRow = members.slice(6);
  const leftSecondRow = secondRow.slice(0, 4);
  const rightSecondRow = secondRow.slice(4, 8);

  const animationDelay = [500, 700, 800];
  const reverseDelay = [...animationDelay].reverse();

  const animationDelaySecondRow = [...animationDelay, 900];
  const reverseDelaySecondRow = [...animationDelaySecondRow].reverse();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderMemberCard = (
    id: string,
    name: string,
    key: string,
    className?: string
  ) => (
    <div key={key} className={className}>
      <MemberCard
        id={id}
        name={name}
        setImage={setImage}
        setShow={setShow}
        setName={setName}
      />
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      if (!hasResized) {
        setShowSlider(false);
        setHasResized(true);
        setTimeout(() => setShowSlider(true), 0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hasResized]);


  return (
    <>
      <MemberBigImage members={members} />

      <div
        id="fighters-selection-container"
        className="relative flex h-full w-full max-w-6xl flex-col items-center justify-end gap-8 sm:p-4"
      >
        {/* Desktop Layout */}
        <div className="hidden w-full flex-wrap justify-center gap-4 px-0 sm:justify-between sm:px-4 md:flex">
          <div className="flex flex-wrap justify-start gap-4">
            {leftRow.map(({ id, name }, index) =>
              renderMemberCard(
                id,
                name,
                id,
                `animate-fade-in-right animate-duration-slower animate-delay-${animationDelay[index]}`
              )
            )}
          </div>
          <div className="hidden flex-wrap justify-end gap-4 md:flex">
            {rightRow.map(({ id, name }, index) =>
              renderMemberCard(
                id,
                name,
                id,
                `animate-fade-in-left animate-duration-slower animate-delay-${reverseDelay[index]}`
              )
            )}
          </div>
        </div>

        {/* Second Row */}
        <div className="hidden flex-wrap justify-center gap-4 sm:justify-between md:flex">
          <div className="flex flex-wrap justify-start gap-4">
            {leftSecondRow.map(({ id, name }, index) =>
              renderMemberCard(
                id,
                name,
                id,
                `animate-fade-in-up animate-delay-${animationDelaySecondRow[index]}`
              )
            )}
          </div>
          <div className="hidden flex-wrap justify-end gap-4 md:flex">
            {rightSecondRow.map(({ id, name }, index) =>
              renderMemberCard(
                id,
                name,
                id,
                `animate-fade-in-up animate-delay-${reverseDelaySecondRow[index]}`
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="-mt-20 flex flex-col items-center justify-center md:mt-32 md:hidden">
        <div className="mt-8 w-full max-w-[100vw] px-4">
          {showSlider && (
            <Slider {...settings}>
              {members.map(({ id, name }) =>
                renderMemberCard(id, name, id, 'px-2 flex justify-center')
              )}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectMember;

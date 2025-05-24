import MemberCard from './MemberCard';
import MemberBigImage from './MemberBigImage';
import ColumnMember from './ColumnMember';
import type { Members } from '../../type/members';

interface Props {
  members: Members[];
}

const SelectYourMember = ({ members }: Props) => {
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

  return (
    <>
      <MemberBigImage members={members} />

      <div id="fighters-selection-container" className="relative flex h-full w-full max-w-6xl flex-col items-center justify-end gap-8 sm:p-4">
        <div className="hidden w-full flex-wrap justify-center gap-4 px-0 sm:justify-between sm:px-4 md:flex">
          <div className="flex flex-wrap justify-start gap-4">
            {leftRow.map(({ id, name }, index) => (
              <div
                key={id}
                className={`animate-fade-in-right animate-duration-slower animate-delay-${animationDelay[index]}`}
              >
                <MemberCard id={id} name={name}/>
              </div>
            ))}
          </div>

          <div className="hidden flex-wrap justify-end gap-4 md:flex">
            {rightRow.map(({ id, name }, index) => (
              <div
                key={id}
                className={`animate-fade-in-left animate-duration-slower animate-delay-${reverseDelay[index]}`}
              >
                <MemberCard id={id} name={name}  />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden flex-wrap justify-center gap-4 sm:justify-between md:flex">
          <div className="flex flex-wrap justify-start gap-4">
            {leftSecondRow.map(({ id, name }, index) => (
              <div
                key={id}
                className={`animate-fade-in-up animate-delay-${animationDelaySecondRow[index]}`}
              >
                <MemberCard id={id} name={name}  />
              </div>
            ))}
          </div>

          <div className="hidden flex-wrap justify-end gap-4 md:flex">
            {rightSecondRow.map(({ id, name }, index) => (
              <div
                key={id}
                className={`animate-fade-in-up animate-delay-${reverseDelaySecondRow[index]}`}
              >
                <MemberCard id={id} name={name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="-mt-20 flex flex-col items-center justify-center md:mt-32 md:hidden">
        <div className="mt-8 w-full max-w-[100vw] overflow-x-scroll">
          <div className="fadeout-horizontal no-scrollbar flex snap-x snap-mandatory gap-12 overflow-x-scroll py-2 pr-[40%]">
            {members.map((member, index) => {
              return (
                <div
                  key={member.id}
                  className={`w-fit flex-shrink-0 snap-center px-2 ${index === 0 ? 'ml-[75%]' : ''}`}
                >
                  <ColumnMember
                    member={member}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectYourMember;

// CSS extra para Tailwind o global:
// .fadeout-horizontal {
//   mask-image: linear-gradient(to right, transparent, black 4.5rem, black calc(100% - 4.5rem), transparent);
// }
import IconContainer from "../IconContainer";
import InfoItem from "../InfoItem";

export default function (): JSX.Element {
  return (
    <div>
      <div className="flex sm:items-center justify-center lg:h-screen sm:mt-[88px] lg:mt-0 mb-[50px] lg:mb-0">
        <div className="flex lg:justify-around lg:w-full xl:justify-between xl:w-[1033px]">
          <div>
            <div className="block lg:hidden mb-[11px] sm:mb-[36px] ">
              <div className="flex justify-center">
                <div className="w-full sm:w-[593px]">
                  <img src="/images/birthday-cake.png" width={"100%"} alt="" />
                </div>
              </div>
            </div>
            <div className="px-[20px] sm:px-0">
              <div className="text-[28px] sm:text-[48px] font-bold text-primary-purple-dark leading-none mb-[6px]">
                Birthday Cake
              </div>
              <div className="text-[14px] sm:text-[18px] text-neutral-gray-2">
                Hosted by <b>Elysia</b>
              </div>
              <div className="mt-[65px]">
                <InfoItem
                  iconSrc="/images/calendar.svg"
                  title="18 August 6:00PM"
                  detail={
                    <div className="text-neutral-gray-1 text-[14px] sm:text-[18px]">
                      to <b>19 August 1:00PM</b> UTC + 10
                    </div>
                  }
                />
                <InfoItem
                  iconSrc="/images/location.svg"
                  title="Street name"
                  detail={
                    <div className="text-neutral-gray-1 text-[14px] sm:text-[18px]">
                      Surburb, State, Postcode
                    </div>
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className="hidden lg:block w-[500px]">
              <img src="/images/birthday-cake.png" width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

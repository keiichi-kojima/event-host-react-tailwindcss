export default function (): JSX.Element {
  return (
    <div className="flex sm:items-center justify-center lg:h-screen mt-[60px] lg:mt-0">
      <div className="flex lg:justify-around lg:w-full xl:justify-between xl:w-[1200px]">
        <div className="hidden lg:block w-[440px]">
          <img src="/images/landing-image.svg" width={"100%"} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-center xl:text-right">
            <div className="text-[36px] sm:text-[64px] font-bold leading-[1.05]">
              <div className="text-primary-purple-dark">Imagine if</div>
              <span className="text-opacity-0 bg-clip-text bg-gradient-to-r from-primary-purple-normal to-primary-pink text-primary-purple-normal">
                Snapshot
              </span>
              <div className="text-primary-purple-dark">had events.</div>
            </div>
            <div className="mt-4 text-[16px] sm:text-[24px] text-neutral-gray-1 leading-[1.2]">
              Easily host and share events with your friends <br />
              across any social media.
            </div>
            <div className="sm:block lg:hidden mt-[52px]">
              <div className="flex justify-center">
                <div className="w-[165px] sm:w-[311px]">
                  <img src="/images/landing-image.svg" width={"100%"} alt="" />
                </div>
              </div>
            </div>
            <button className="mt-[52px] mb-[26px] lg:mb-0 text-white rounded-[10px] py-[16px] px-[16px] sm:px-[70px] font-bold sm:text-[20px] bg-gradient-to-r from-primary-purple-normal to-primary-pink">
              🎉 Create my event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

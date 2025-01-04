import { Link } from "react-router-dom";

function JoinTheApp() {
  return (
    <div>
      <div className="bg-[#edebe9] w-full sticky z-[10] top-0">
        <div className="flex custom:px-[110px] lg:px-[40px]  justify-between items-center max-w-[1500px] mx-auto px-[1.6rem] h-[50px]">
          <h1 className="uppercase font-soDoSans  text-[13px] tracking-[0.1em]">
            Starbucks® Rewards
          </h1>
          <Link
            className="border text-white bg-[#17815a] whitespace-nowrap px-[16px] py-[4px] rounded-full font-semibold text-center inline-block"
            to={"/signup"}
          >
            Join now
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-[#212121] text-center mt-5">
          <span class="font-bold text-[24px]">
            It all starts with the Starbucks® app
          </span>
        </h1>
        <div className="mt-[1em] text-[#212121] text-[22px] text-center">
          <div>
            Want to order ahead for pick up? You're in the right place. Just get
            the app, place your order and head our way.
          </div>
          <div className="mt-[1.5em]">
            When you're ready to unlock more perks (like our best offers, a
            birthday treat and free in-store refills on coffee and tea), it's
            always free to join Starbucks® Rewards.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <img src="/assets/qr codde.png" alt="qr" />
      </div>

      <div class="flex flex-col justify-center items-center pb-2 bg-[#f9f9f9]">
        <img
          alt="Illustration of a mobile phone showing a hot beverage"
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-64389.png"
        />
        <h2 className="text-[24px] font-semibold">Starbucks® app for iPhone®</h2>
        <a className="mt-10 min-w-[32px] font-semibold border hover:bg-[#e0e0e0] border-black px-[16px] py-[7px] rounded-full" href="https://starbucks.app.link/I1sntOS9z5">Download at the App Store</a>
      </div>

      <div class="flex flex-col justify-center items-center pb-2 mt-10 bg-[#f9f9f9]">
        <img
          alt="Illustration of a mobile phone showing a hot beverage"
          src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-64390.png"
        />
        <h2 className="text-[24px] font-semibold">Starbucks® app for Android™</h2>
        <a className="mt-10 min-w-[32px] font-semibold border border-black px-[16px] py-[5px] rounded-full hover:bg-[#e0e0e0]" href="https://starbucks.app.link/wWzZZ9P9z5">Download on Google Play</a>
      </div>

    </div>
  );
}

export default JoinTheApp;

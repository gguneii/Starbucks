function Rewards() {
  return (
    <main className="">
      <div className="flex custom:px-[110px] justify-between items-center w-full top-0 px-[1.6rem] bg-[#1e3932] text-white h-[50px]">
        <h1 className="uppercase font-soDoSans text-[13px] tracking-[0.1em] ">
          Starbucks® Rewards
        </h1>
        <a
          className="border  px-[16px] py-[4px] rounded-full font-semibold text-center inline-block md:hidden"
          href=""
        >
          Join in the app
        </a>
      </div>

      <div className="bg-[url('/assets/rewards.webp')] bg-cover bg-no-repeat w-full h-[100vh]">
        <div className="max-w-[400px] mx-auto py-[2rem] text-center">
          <h2 className="font-semibold leading-[1.29] text-[1.8rem]">
            FREE COFFEE <br />
            IS A TAP AWAY
          </h2>
          <p className="pt-[1.6rem] text-[1.2rem]">
            Join now to start earning Rewards.
          </p>
          <div className="pt-[2rem]">
            <a
              className="bg-[hsl(158_100%_23%)] text-white px-[16px] py-[7px] font-semibold rounded-full"
              href=""
            >
              Join in the app
            </a>
            <div className="pt-[1.6rem]">
              <a className="underline" href="">
                Or join online
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Rewards;

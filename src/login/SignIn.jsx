import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function SignIn() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  function rememberPass(e) {
    setChecked(e.target.checked);
  }
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <>
      <Helmet>
        <title>Account sign in: Starbucks Coffee Company</title>
      </Helmet>
      <div>
        <h1 className="text-center py-[2rem] font-bold text-[1.6rem]">
          Sign in or create an account
        </h1>
        <div className="px-4 md:border rounded-xl md:py-8 md:mx-auto md:max-w-[500px] md:px-6 md:shadow-[0_2px_4px_#00000012,0_4px_5px_#0000000f,0_1px_10px_#0000001a]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email || !password) {
                alert("Please fill out all fields.");
              } else {
                window.location.href = "/";
              }
            }}
          >
            <p className="pb-6 md:text-[17px]">
              <span className="text-[#00754a]">* </span>
              indicates required field
            </p>
            <div className="relative border border-[#999999] rounded-[8px] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] px-[16px] py-[12px]">
              <input
                className="peer w-full border-0 outline-none !bg-white text-[1rem] md:text-[1.2rem]"
                type="email"
                id="username"
                autoComplete="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className={`absolute left-[16px] cursor-text peer-focus:translate-y-[40%] peer-focus:top-[-50%] peer-focus:bg-[#f0f7f5] 
            peer-focus:text-[#00754a] peer-focus:text-[13px] ${
              email
                ? "top-[-50%] translate-y-[60%] text-[#6c6c6c] bg-white text-[15px]"
                : "top-[50%] translate-y-[-50%] text-[1.2rem]"
            } px-[.4rem] font-semibold tracking-wide text-[#000000de] z-[2] transition-all`}
                htmlFor="username"
              >
                <span className="text-[#00754a]">*</span> Username or email
                address
              </label>
            </div>

            <div className="relative flex items-center border border-[#999999] rounded-[8px] focus-within:shadow-[0_0_0_2px_#00754a] focus-within:bg-[hsl(160_32%_87%_/33%)] px-[16px] py-[14px] mt-[40px]">
              <input
                className="peer w-full border-0 outline-none bg-white focus-within:bg-[#f0f7f5]"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  aria-hidden="true"
                  className="w-[24px] h-[24px] fill-[#00000094]"
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  loading="lazy"
                >
                  {showPassword ? (
                    <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7zm0 12c-3.88 0-7-2.69-7-5s3.12-5 7-5 7 2.69 7 5-3.12 5-7 5zm-4-5c0-2.22 1.79-4 4-4 1.16 0 2.15.49 2.83 1.26l-5.57 5.57C8.49 13.15 8 12.16 8 11zm8 0c0 2.22-1.79 4-4 4-1.16 0-2.15-.49-2.83-1.26l5.57-5.57C15.51 8.85 16 9.84 16 11z" />
                  ) : (
                    <path d="M22.7666,12.0294463 C22.0125135,11.2099699 19.8884152,9.08797941 17.0977677,7.6916 L14.4874682,10.3008467 C14.8397268,10.8049777 15.0348401,11.4019193 15.0348401,12.0294463 C15.0348401,13.7032032 13.6732656,15.0647786 11.9995099,15.0647786 C11.3719834,15.0647786 10.7760968,14.8696652 10.2709116,14.5174063 L7.9517,16.8366195 C9.33225842,17.3924292 10.6917235,17.6909 11.9995099,17.6909 C17.1779223,17.6909 21.6011935,13.295047 22.7666,12.0294463 M13.7217084,11.0676 L11.0376,13.7517084 C11.3297407,13.9151806 11.6556305,14.0101 11.9994495,14.0101 C13.0920767,14.0101 13.9801,13.1220767 13.9801,12.0294495 C13.9801,11.6856305 13.8851806,11.3597407 13.7217084,11.0676 M23.8781861,12.3658587 C23.6619796,12.6263607 18.5088818,18.7455213 11.9994836,18.7455213 C10.4238127,18.7455213 8.79224449,18.3647876 7.14591096,17.6423428 L4.60838471,20.1809191 C4.50502745,20.2832215 4.37003021,20.3349 4.23503297,20.3349 C4.10003573,20.3349 3.96503849,20.2832215 3.86273589,20.1809191 C3.65602137,19.9742049 3.65602137,19.6409311 3.86273589,19.4342169 L16.6336857,6.66329032 C16.6389591,6.658017 16.6442324,6.65274368 16.6495057,6.64852502 L19.142736,4.15424461 C19.3483959,3.94858513 19.682725,3.94858513 19.8883848,4.15424461 C20.0940447,4.36095876 20.0940447,4.69423259 19.8883848,4.89989207 L17.8876836,6.90164438 C21.4144865,8.75574373 23.7727195,11.5664233 23.8781861,11.692983 C24.0406046,11.8880959 24.0406046,12.1707458 23.8781861,12.3658587 M10.0378313,11.7562456 C10.1601725,10.8713937 10.8636339,10.1763789 11.7484978,10.0645859 C12.0374759,10.0287278 12.2420809,9.76506513 12.2062223,9.47609085 C12.1703637,9.18711657 11.9151348,8.98462364 11.6166647,9.01837246 C10.259311,9.18922587 9.18038879,10.2554777 8.99265844,11.6117584 C8.95258118,11.8996781 9.15507683,12.1665047 9.44300035,12.2055267 C9.46725764,12.2097453 9.4925696,12.2108 9.51577222,12.2108 C9.77521978,12.2108 10.0009181,12.0199082 10.0378313,11.7562456 M5.18633767,16.5424 C5.09036274,16.5424 4.99227847,16.5160333 4.90579556,16.4622452 C2.04025831,14.6598169 0.198805216,12.4587239 0.121814337,12.3659131 C-0.0406047789,12.1707994 -0.0406047789,11.8881483 0.121814337,11.6930346 C0.338021601,11.4325315 5.49008251,5.3144 11.9995032,5.3144 C12.9972206,5.3144 14.0244688,5.46099891 15.054881,5.75314206 C15.3364777,5.83224219 15.4988969,6.12333068 15.4197966,6.40387248 C15.3396417,6.68335961 15.0464436,6.84577855 14.7690655,6.76773308 C13.8314642,6.50301131 12.900191,6.36906842 11.9995032,6.36906842 C6.82107553,6.36906842 2.39884597,10.7638717 1.23238141,12.0294738 C1.85252712,12.703407 3.39234471,14.2643162 5.46687978,15.568941 C5.71367246,15.7239773 5.78749933,16.0498698 5.63246291,16.2956076 C5.5322693,16.4559172 5.36141282,16.5424 5.18633767,16.5424"></path>
                  )}
                </svg>
              </button>
              <label
                className={`absolute left-[16px] cursor-text peer-focus:translate-y-[40%] peer-focus:top-[-50%] peer-focus:bg-[#f0f7f5] 
                peer-focus:text-[#00754a] peer-focus:text-[13px] ${
                  password
                    ? "top-[-50%] translate-y-[60%] bg-white text-[#6c6c6c] text-[15px]"
                    : "top-[50%] translate-y-[-50%] md:text-[1.2rem]"
                }  px-[.4rem] font-semibold tracking-wide text-[#000000de] z-[2] transition-all`}
                htmlFor="password"
              >
                <span className="text-[#00754a]">* </span>
                Password
              </label>
            </div>

            <div className="relative flex items-center mt-5 md:mt-10">
              <label htmlFor="remember"></label>
              <input
                onChange={rememberPass}
                className="border-0 w-[20px] h-[20px] opacity-0 overflow-hidden absolute left-[3px] top-1 cursor-pointer"
                type="checkbox"
                name=""
                id="remember"
              />
              <span>
                <svg
                  aria-hidden="true"
                  className={`w-[24px] h-[24px] border rounded-lg border-[#00754a] ${
                    checked ? "bg-[#00754a] fill-white" : "fill-none"
                  }`}
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  loading="lazy"
                >
                  <path d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z"></path>
                </svg>
              </span>
              <span className="px-2 text-[14px] md:text-[16px] font-medium">
                Keep me signed in.
              </span>
              <a
                className="text-[15px] md:text-[17px] font-bold text-[#00754a] underline hover:no-underline"
                href=""
              >
                Details
              </a>
            </div>
            <p className="mt-5">
              <a
                className="text-[14px] md:text-[16px] text-[#00754a] font-bold underline hover:no-underline"
                href=""
              >
                Forgot your username?
              </a>
            </p>
            <p className="mt-2">
              <a
                className="text-[14px] md:text-[16px] text-[#00754a] font-bold underline hover:no-underline"
                href=""
              >
                Forgot your password?
              </a>
            </p>

            <div className="text-right mt-[50px]">
              <button className="px-[20px] py-[14px] bg-[#00754a] text-white font-bold text-[18px] rounded-full">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-10 md:my-20 px-4 md:max-w-[380px] mx-auto">
          <h2 className="uppercase tracking-wider text-[#00754a] font-bold text-[.9rem]">
            Join Starbucks® Rewards
          </h2>
          <p className="my-[1rem] text-[14px] md:text-[16px] font-semibold">
            Join Starbucks® Rewards to earn free food and drinks, get free
            refills, pay and order with your phone, and more.
          </p>
          <Link
            to={"/signup"}
            className="border border-[#00754a] text-[#00754a] font-bold rounded-full px-[16px] py-[7px]"
          >
            Join now
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;

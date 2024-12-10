import { Helmet } from "react-helmet";
import CategorySwiper from "./CategorySwiper";

function GiftCards() {

  return (
    <>
      <Helmet>
        <title>Starbucks Gift Cards: Starbucks Coffe Company</title>
      </Helmet>
      <main className="max-w-[1800px] mx-auto">
        <div className="md:!pl-[90px]">
          <h1 className="px-4 mt-5 font-bold text-[28px] md:text-[35px] md:font-soDoSans md:mt-10">
            Gift Cards
          </h1>
        </div>

        <CategorySwiper
          title="Featured"
          categoryName="Featured"
        />

        <div className="px-4 mt-8 md:pl-[100px]">
          <div className="flex items-center justify-center bg-[#edebe9] p-4 rounded-lg md:justify-start">
            <img
              src="/assets/group-gift-cards.webp"
              alt=""
              width="58.66px"
              loading="lazy"
            />
            <p className="text-[13px] font-medium px-4 md:text-[16px]">
              Effortlessly send up to 10 eGifts per purchase. Select a design to
              start!
            </p>
          </div>
        </div>

        <div className="bg-[#d4e9e2] mt-5 px-4">
          <div className="md:px-[90px] lg:flex items-center lg:py-10">
            <h2 className="font-semibold text-[18px] pt-6 md:text-[24px] lg:pt-0 lg:text-[25px]">
              Received a gift card?
            </h2>
            <div className="md:flex items-center pt-[10px] pb-[30px] lg:pb-0 lg:pt-0 lg:px-5">
              <p className="text-[#00000094] md:text-[20px]">
                Earns 2<span>★ </span>
                per $1
              </p>
              <div className="py-5 md:py-0 md:px-5 lg:py-0">
                <a
                  className="border inline-block md:font-bold min-w-[35px] min-h-[35px] border-black px-[16px] py-[7px] mr-5 rounded-full"
                  href=""
                >
                  Add or Reload
                </a>
                <a
                  className="border inline-block md:font-bold min-w-[35px] min-h-[35px] border-black text-white bg-black px-[16px] py-[7px] mt-3 md:mt-0  rounded-full"
                  href=""
                >
                  Check balance
                </a>
              </div>
            </div>
          </div>
        </div>

        <CategorySwiper title="Holiday" categoryName="Holiday"  />

        <CategorySwiper title="Red Cup" categoryName="Red Cup" />
        <CategorySwiper
          title="Birthday"
          categoryName="Birthday"
          
        />
        <CategorySwiper
          title="Thank You"
          categoryName="Thank You"
        />
        <CategorySwiper
          title="Celebration"
          categoryName="Celebration"
        />
        <CategorySwiper
          title="Thanksgiving | 11/28"
          categoryName="Thanksgiving | 11/28"
        />
        <CategorySwiper
          title="Appreciation"
          categoryName="Appreciation"
        />
        <CategorySwiper title="Wicked" categoryName="Wicked"  />
        <CategorySwiper
          title="Encouragement"
          categoryName="Encouragement"
        />
        <CategorySwiper
          title="Affection"
          categoryName="Affection"
        />
        <CategorySwiper
          title="Workplace"
          categoryName="Workplace"
        />
        <CategorySwiper title="Anytime" categoryName="Anytime"  />

        <div className="py-10 mt-10 bg-[#f9f9f9] md:text-center md:flex items-center justify-ceter md:px-[90px]">
          <img
            className="w-full max-w-[375px] px-4 pt-5"
            src="/assets/bulk-gift-cards.webp"
            alt="bulk-gift-cards"
          />
          <div className="pt-[1.5rem] text-start ml-4 max-w-[375px] md:ml-5 lg:ml-10">
            <h2 className="text-[20px] font-semibold md:text-[26px]">
              Business gifting — simplified
            </h2>
            <p className="my-3 text-[#00000094] text-[14px] md:text-[17px]">
              Bulk send physical or digital Starbucks Cards to gift, reward,
              incentivize, or show appreciation towards your customers, clients
              and team members. Minimum 15 cards per order.
            </p>
            <a
              href=""
              className="inline-flex border items-center px-[16px] py-[7px] md:mt-5 border-black rounded-full"
            >
              <span className="font-semibold text-[14px] md:text-[17px]">
                Shop now
              </span>
              <svg
                aria-hidden="true"
                className="w-[24px] h-[24px]"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                loading="lazy"
              >
                <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="bg-[#edebe9] px-[1rem] py-[2rem] flex flex-col md:flex-row md:px-[100px]">
          <div>
            <h2 className="font-semibold text-[18px] md:text-[20px]">
              About eGift cards
            </h2>
            <p className="text-[14px] font-normal py-3">
              A Starbucks eGift card (also known as an “eGift”) is a Starbucks
              Gift Card that is purchased and sent digitally.
            </p>
            <p className="text-[14px] font-normal pb-3">
              For Senders of an eGift, go to eGift History when signed in to
              view, send, or resend eGifts you’ve purchased — or, to directly
              contact Starbucks eGift Support for help with your order.
            </p>

            <h2 className="font-semibold text-[18px] mt-3 md:text-[20px]">
              Questions around eGift cards?
            </h2>
            <p className="text-[14px] font-normal py-3">
              Check our Frequently Asked Questions — your question might already
              be answered. There, you’ll find answers for all Starbucks Gift
              Cards in general (including eGifts).
            </p>
            <a
              href=""
              className="inline-flex border items-center px-[16px] py-[7px] md:mt-5 border-black rounded-full"
            >
              <span className="font-semibold text-[14px] md:text-[17px]">
                Card FAQs
              </span>
              <svg
                aria-hidden="true"
                className="w-[24px] h-[24px]"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                loading="lazy"
              >
                <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
              </svg>
            </a>
          </div>
          <div className="pl-10">
            <h2 className="font-semibold text-[18px] mt-3 md:text-[20px]">
              About Starbucks Gift Cards in general
            </h2>
            <p className="text-[14px] font-normal py-3">
              Starbucks Gift Cards, including eGifts, can be used to pay in a
              Starbucks store or to join Starbucks® Rewards{" "}
            </p>
            <p className="text-[14px] font-normal pb-3">
              Register Gift Cards and eGifts to a Starbucks® Rewards account and
              earn 2★ per dollar every time you pay with that card. Those Stars
              quickly add up to free food, drinks, and more!
            </p>
            <a
              href=""
              className="inline-flex border items-center px-[16px] py-[7px] md:mt-5 border-black rounded-full"
            >
              <span className="font-semibold text-[14px] md:text-[17px]">
                Card Terms & Conditions
              </span>
              <svg
                aria-hidden="true"
                className="w-[24px] h-[24px]"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                loading="lazy"
              >
                <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default GiftCards;

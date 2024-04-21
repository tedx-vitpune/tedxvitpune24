/* eslint-disable @next/next/no-img-element */

const header = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dq8og12k9/image/upload/v1712652124/CC/4_gmf2yt.png"
        alt="cc"
        className="w-full h-[80vh] object-cover object-center"
      />

      <div className="w-full flex justify-center items-center relative bottom-6 md:bottom-10">
        <div className="bg-white rounded-full py-1 px-6 md:py-4 md:px-16 flex justify-center items-center shadow-lg w-max">
          <h1 className="text-black text-xl md:text-4xl font-mbold">
            Community Conversations
          </h1>
        </div>
      </div>
      <div className="text-black my-8 md:my-16 max-w-6xl mx-auto pb-1 px-6 xl:px-0">
        <div className="my-16">
          <h2 className="text-3xl md:text-4xl text-black font-mblack">What ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            Community Conversations” is a platform to share your ideas, get
            yourself collaborating, and become a part of meaningful
            conversations to create memories for a lifetime!
          </p>
        </div>
        <div className="my-16">
          <h2 className="text-3xl md:text-4xl text-black font-mblack">Why ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            At TEDxVITPune we believe in forging strong and ever-lasting bonds,
            bringing together people from all different walks of life to natter
            and exchange ideas in whole different dimensions.
          </p>
        </div>
        <div className="my-16">
          <h2 className="text-3xl md:text-4xl text-black font-mblack">Who ?</h2>
          <p className="text-[#484848] text-xl md:text-2xl font-semibold mt-4 tracking-wider">
            Anyone at all! Get your friends, interact with the TEDx community
            and look forward to unforgettable colloquies as we smile our way
            through Community Conversations!
          </p>
        </div>
      </div>
    </div>
  );
};
export default header;

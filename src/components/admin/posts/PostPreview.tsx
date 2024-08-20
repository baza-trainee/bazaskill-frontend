interface IPostPreviewProps {
  currentValues: {
    title: string;
    text: string;
  };
  image: string;
}

const PostPreview = ({
  currentValues,
  image,
}: IPostPreviewProps) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('uk-UK');
  return (
    <article className="relative hidden h-[336px] w-[442px] flex-col justify-between overflow-hidden rounded-md border-2 border-[#7EFE92] md:flex  md:w-[340px] 5xl:h-[336px] 5xl:w-[464px]">
      <div className="relative">
        <div
          className={`absolute inset-0 h-[150px] w-full bg-cover bg-center grayscale transition-all`}
          style={{
            backgroundImage: `url(${image ? image : '/images/gallery-placeholder.jpg'})`,
          }}
          title={currentValues.title}
        ></div>
        <p className="backdrop-brightness-10 absolute left-0 top-0 z-10 w-[104px] rounded-br-lg bg-dateBlack/40 p-2 text-center text-white backdrop-blur-sm">
          {formattedDate}
        </p>
      </div>

      <div className="z-10 h-[55%] bg-black p-6 md:p-3 xl:p-6">
        <h4 className="pb-4 text-left text-[16px] font-semibold text-white md:pb-4 md:text-base xl:pb-6 xl:text-xl">
          {currentValues.title}
        </h4>

        <p className="text-[14px] text-white md:line-clamp-4 xl:line-clamp-4">
          {currentValues.text}
        </p>
      </div>
    </article>
  );
};

export default PostPreview;

import Image from 'next/image';

interface IPostPreviewProps {
  currentValues: {
    title: string;
    text: string;
  };
  image: string;
}

function PostPreview({
  currentValues,
  image,
}: IPostPreviewProps) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('uk-UK');
  return (
    <article className="mx-auto flex flex-col-reverse lg:flex-row justify-start items-start h-[600px] lg:h-[336px] w-[350px] sm:w-[500px] xl:w-[592px] 4xl:w-[500px] overflow-hidden rounded-lg bg-black text-white shadow-lg">
    <div className="flex w-full lg:w-1/2 flex-col justify-between p-6 min-h-[300px]">
      <div className='relative'>

          <h2 className="mb-4 text-2xl font-bold text-center">{currentValues.title}</h2>
        <p className="text-sm">{currentValues.text}</p>
      </div>
    </div>
    <div className="relative w-full min-h-[336px] lg:w-1/2">
      <Image
        src={image || '/images/gallery-placeholder.jpg'}
        alt={`An image for ${currentValues.title}`}
        layout="fill"
        objectFit="cover"
        className="bg-muted"
      />
    </div>
  </article>
  );
}

export default PostPreview;

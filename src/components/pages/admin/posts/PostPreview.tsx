import Image from 'next/image';

interface IPostPreviewProps {
  currentValues: {
    title: string;
    text: string;
  };
  image: string;
}

function PostPreview({ currentValues, image }: IPostPreviewProps) {
  return (
    <article className="mx-auto flex h-[600px] w-[350px] flex-col-reverse items-start justify-start overflow-hidden rounded-lg bg-black text-white shadow-lg sm:w-[500px] lg:h-[336px] lg:flex-row xl:w-[592px] 4xl:w-[500px]">
      <div className="flex min-h-[300px] w-full flex-col justify-between p-6 lg:w-1/2">
        <div className="relative">
          <h2 className="mb-4 text-center text-2xl font-bold">
            {currentValues.title}
          </h2>
          <p className="text-sm">{currentValues.text}</p>
        </div>
      </div>
      <div className="relative min-h-[336px] w-full lg:w-1/2">
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

import HeadNext from "next/head";

const Head = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <HeadNext>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </HeadNext>
  );
};

export default Head;

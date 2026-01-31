type Props = {
  title: string;
  content: string;
};

const CareerIntro: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-primary">
        {title}
      </h1>
      <div
        className="mt-2 text-gray-600"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </section>
  );
};

export default CareerIntro;

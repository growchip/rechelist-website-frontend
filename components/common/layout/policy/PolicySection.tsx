interface PolicyProps {
  description?: string;
  title?: string;
  content?: string;
}

export default function PolicySection({
  description,
  title,
  content,
}: PolicyProps) {
  // Case 1: Only description → Intro section
  if (description && !title && !content) {
    return <p className="text-gray-600 text-base mb-gapUltra">{description}</p>;
  }

  // Case 2: Title + Content → Section block
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border">
      {title && (
        <h4 className="text-lg lg:text-xl font-semibold text-primaryBlue mb-2">
          {title}
        </h4>
      )}
      {content && (
        <div
          className="text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </section>
  );
}

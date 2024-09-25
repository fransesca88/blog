const PageTitle = ({ title = "", description = "" }) => {
  return (
    <section id="page-title" className="mb-6">
      <h1 className="text-2xl font-semibold leading-loose">{title}</h1>
      {description && description !== "" ? (
        <p className="text-gray-500">{description}</p>
      ) : null}
    </section>
  );
};

export default PageTitle;

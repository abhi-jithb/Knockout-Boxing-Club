export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="p-8">
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
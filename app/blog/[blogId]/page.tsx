interface blogPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function blogIdPage({ params }: blogPageProps) {
  const { blogId } = await params;
  return (
    <div>
      <h1>{blogId}</h1>
    </div>
  );
}

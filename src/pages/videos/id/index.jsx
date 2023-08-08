import Container from '../../../components/container';

export default function VideoDetailPage() {
  return (
    <div className="flex justify-between">
      <section className="bg-shade-900 py-4 w-60 h-screen shadow-xl">
        <Container>Products</Container>
      </section>
      <section>
        <Container>
          <div className="py-6">
            <h1 className="font-bold">Serbu Flash Sale Pempek Palembang Yuk</h1>
          </div>
          <div className="rounded-lg">
            <iframe
              width="560"
              height="316"
              src="https://www.youtube.com/embed/onDdWlK_ZsA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </section>
      <section className="bg-shade-900 py-4 w-60 h-screen shadow-xl">
        <Container>Comments</Container>
      </section>
    </div>
  );
}

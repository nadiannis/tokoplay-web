import Video from './video-card';

export default function VideoList() {
  return (
    <div className="mt-5 flex flex-wrap">
      <Video
        video={{
          imageUrl:
            'https://images.unsplash.com/photo-1691175085195-a743156f9b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        }}
      />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

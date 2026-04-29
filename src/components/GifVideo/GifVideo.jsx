function GifVideo({ webm, mp4, alt, width, height, className, style }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      width={width}
      height={height}
      className={className}
      style={style}
      aria-label={alt}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

export default GifVideo;

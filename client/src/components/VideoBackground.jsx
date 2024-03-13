const VideoBackground = () => {
  return (
    <div className="w-screen">
        <iframe 
            className="w-screen aspect-video"
            src="https://www.youtube.com/embed/Zv11L-ZfrSg?si=U-c14QoseWiJt3NT&autoplay=1&mute=1" 
            title="YouTube video player" 
            allowfullscreen>
        </iframe>
    </div>
  )
}

export default VideoBackground

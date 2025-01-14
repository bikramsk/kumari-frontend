const VideoPlayer = ({ src }) => {
    return (
        <div className="relative">
            <video
                className="w-full"
                autoPlay
                loop
                muted
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
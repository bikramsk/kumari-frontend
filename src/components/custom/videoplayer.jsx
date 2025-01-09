const VideoPlayer = () => {
    return (
        <div className="flex">
            <video
                className="w-full  "
                
                controls
                autoPlay
                loop
                muted
                
            >
                <source src="/videos/sg-who-you-are.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
export function Video() {
    return (
        
      <video width="320" height="240"  preload="none"  autoPlay loop muted className="w-full h-full  object-cover -z-10 absolute  " >
        <source src="/videos/vd.mp4" controls type="video/mp4" />
      
        Your browser does not support the video tag.
      </video>
      
    )
  }
const Empower = () => {
  return (
        <div
        className="relative w-full bg-cover bg-center min-h-[90vh] flex items-center justify-center"
        style={{
            backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 50) 0%, rgba(0, 0, 0, 0) 30%), url('/us.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
    >
        <img 
        src="/Rocket_1.png" 
        alt="Left Image" 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[150px] h-auto"
    />
    <img 
        src="/folder.png" 
        alt="Right Image" 
        className="absolute right-0 top-3/4 transform -translate-y-1/2 w-[150px] h-auto"
    />
    <img 
        src="/star.png" 
        alt="star" 
        className="absolute top-1/2 transform -translate-y-1/2 w-[10px] h-auto"
    />
    <img 
        src="/star.png" 
        alt="star" 
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-[30px] h-auto"
    />
    <img 
        src="/star.png" 
        alt="star" 
        className="absolute right-20 top-3/4 transform -translate-y-1/2 w-[20px] h-auto"
    />
    <img 
        src="/star.png" 
        alt="star" 
        className="absolute left-20 top-3/4 transform -translate-y-1/2 w-[20px] h-auto"
    />
    <img 
        src="/star.png" 
        alt="star" 
        className="absolute left-20 top-10 transform -translate-y-1/2 w-[30px] h-auto"
    />


    <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-4xl font-bold justify-center text-white -mt-25">
          Empowering Your <br/>
          Digital Growth <span className="text-purple-400">Journey</span>
        </h2>
        <p className="mt-12 text-white leading-relaxed">
          DigiZinc is a <span className="text-purple-400">full-service Creative Agency</span> that blends innovation 
          with design, helping brands craft compelling visual identities and impactful storytelling. We offer tailored creative solutions, 
          including branding, content creation, and digital experiences that captivate audiences and elevate brand presence. 
        </p>
        <p className="mt-4 text-white leading-relaxed">
        With a passion for creativity and a deep understanding of digital trends, DigiZinc transforms ideas into visually stunning narratives that drive engagement, inspire action, 
          and create lasting brand impressions.
        </p>
      </div>
    </div>
  )
}
export default Empower;
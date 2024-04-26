import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {

    return (
        <div>
            <Carousel
            className=""
            autoplay={true}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/255mynHr/landscape-7455387-1920.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                            >
                                Unleash Your Creativity!
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                 Explore a world of artistic possibilities with CanvasCraze. From premium canvases to vibrant paints, we have everything you need to bring your imagination to life.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button className="rounded-none" size="lg" color="white">
                                    Explore
                                </Button>
                                <Button className="rounded-none" size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/255mynHr/landscape-7455387-1920.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                            >
                                Elevate Your Artistry
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                 Elevate your artistic endeavors with CanvasCraze. Discover high-quality brushes, sketchbooks, and drawing tools designed to inspire and empower artists of all levels.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button className="rounded-none" size="lg" color="white">
                                    Explore
                                </Button>
                                <Button className="rounded-none" size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/255mynHr/landscape-7455387-1920.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-7xl"
                            >
                                Inspiration Awaits
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                  Dive into a realm of inspiration with CanvasCraze. Browse our curated collection of painting and drawing supplies, and embark on a journey of self-expression and creativity.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button className="rounded-none" size="lg" color="white">
                                    Explore
                                </Button>
                                <Button className="rounded-none" size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
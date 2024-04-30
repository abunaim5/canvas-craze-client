import { Button } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";

const ArtistSpotlight = () => {
    return (
        <div className="">
            <div className="text-center mb-20">
                <h1 className="text-4xl font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">Artist Spotlight</h1>
                <p className="dark:text-[#C8CBD0] mt-8 font-lato max-w-4xl mx-auto">Dive into the captivating world of artistry with our Artist Spotlight section. Discover talented artists from various disciplines as we showcase their work and share insights into their creative process.</p>
            </div>
            <div className="">
                <Marquee pauseOnHover={true}>
                    <div className="text-center max-w-sm ml-12">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.postimg.cc/52kXy5K9/petr-sevcovic-e12w-QLAj-Qi0-unsplash.jpg" />
                            </div>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">John Doe</h3>
                        <p className="font-lato text-sm dark:text-[#C8CBD0] mt-2">Art has always been my way of expressing the beauty I see in the world.</p>
                        <Button className="rounded-none mt-4 bg-transparent border border-[#a55e3f] text-[#000000] dark:text-[#C8CBD0] dark:border-[#C8CBD0] font-lato tracking-widest">See More</Button>
                    </div>
                    <div className="text-center max-w-sm ml-12">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.postimg.cc/HWBdTYhd/robert-godwin-cdksy-Tq-EXzo-unsplash.jpg" />
                            </div>
                        </div>
                        <h3 className="text-xl mt-3 font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">Michel Jonson</h3>
                        <p className="font-lato text-sm mt-2 dark:text-[#C8CBD0]">For me, art is more than just creating; it&apos;s a journey of self-discovery and expression.</p>
                        <Button className="rounded-none mt-4 bg-transparent border border-[#a55e3f] text-[#000000] dark:text-[#C8CBD0] dark:border-[#C8CBD0] font-lato tracking-widest">See More</Button>
                    </div>
                    <div className="text-center max-w-sm ml-12">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.postimg.cc/PfwfQs3j/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg" />
                            </div>
                        </div>
                        <h3 className="text-xl mt-3 font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">Mark Pitter</h3>
                        <p className="font-lato text-sm mt-2 dark:text-[#C8CBD0]">Each brushstroke is a reflection of my innermost thoughts and feelings.</p>
                        <Button className="rounded-none mt-4 bg-transparent border border-[#a55e3f] text-[#000000] dark:text-[#C8CBD0] dark:border-[#C8CBD0] font-lato tracking-widest">See More</Button>
                    </div>
                    <div className="text-center max-w-sm ml-12">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.postimg.cc/YCS4tD3y/nicolas-horn-MTZTGv-Ds-HFY-unsplash.jpg" />
                            </div>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold tracking-widest uppercase text-[#a55e3f] dark:text-[#C8CBD0]">Lee Parker</h3>
                        <p className="font-lato text-sm mt-2 dark:text-[#C8CBD0]">As an artist, I&apos;m constantly exploring new techniques and pushing the boundaries of my creativity.</p>
                        <Button className="rounded-none mt-4 bg-transparent border border-[#a55e3f] text-[#000000] dark:text-[#C8CBD0] dark:border-[#C8CBD0] font-lato tracking-widest">See More</Button>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default ArtistSpotlight;
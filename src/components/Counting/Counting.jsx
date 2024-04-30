import { Typewriter } from 'react-simple-typewriter';
import background from '/images/template-2789709_1920.jpg'

const Counting = () => {
    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)}
    //   }

    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-top bg-no-repeat bg-cover object-contain">
            <div className='max-w-screen-xl mx-auto p-4 flex justify-between items-center flex-col md:flex-row min-h-96'>
                <div className="text-center">
                    <h4 className="text-6xl font-semibold tracking-widest text-[#2a2727] mb-4">
                        <Typewriter
                            words={['2435']}
                            delaySpeed={1000}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={50}
                            // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </h4>
                    <p className="font-lato text-lg italic text-[#2a2727] font-normal">Items Sold</p>
                </div>
                <div className="text-center">
                    <h4 className="text-6xl font-semibold tracking-widest text-[#2a2727] mb-4">
                        <Typewriter
                            words={['531']}
                            delaySpeed={1000}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={50}
                            // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </h4>
                    <p className="font-lato text-lg italic text-[#2a2727] font-normal">Happy Customers</p>
                </div>
                <div className="text-center">
                    <h4 className="text-6xl font-semibold tracking-widest text-[#2a2727] mb-4">
                        <Typewriter
                            words={['1394']}
                            delaySpeed={1000}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={50}
                            // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </h4>
                    <p className="font-lato text-lg italic text-[#2a2727] font-normal">Different products</p>
                </div>
                <div className="text-center">
                    <h4 className="text-6xl font-semibold tracking-widest text-[#2a2727] mb-4">
                        <Typewriter
                            words={['375']}
                            delaySpeed={1000}
                            loop={1}
                            typeSpeed={70}
                            deleteSpeed={50}
                            // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                    </h4>
                    <p className="font-lato text-lg italic text-[#2a2727] font-normal">Media reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Counting;
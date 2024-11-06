import React from 'react';

const Contact = () => {
    const handleSubmit = async (e) => {

    }
    return (
        <div className="px-8 mt-16 bg-white">
            <div className="pt-[3.8rem]">
                <div className="text-6xl text-lime-600 font-semibold text-center w-full">Contact</div>
                <p className="text-center text-black font-[600] text-[24px] mb-10  w-full mt-4">We’d love to hear from you!<br /> Reach out to us with any questions or feedback</p>
            </div>

            <div className="flex justify-center mt-18">
                <form onSubmit={handleSubmit}>
                    <div className="lg:px-14 w-[18rem] md:w-[25rem] lg:w-[74rem] flex flex-col gap-10">
                        <div className="block lg:flex gap-10 w-[18rem] md:w-[25rem] lg:w-[74rem]">
                            <div className="relative p-[1px] box-border bg-white shadow-lg mb-10 lg:mb-0">
                                <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-r from-[rgb(249,115,22)] to-[rgb(234,88,12)] pointer-events-none"></div>
                                <div className="relative z-10 bg-white rounded-[inherit]">
                                    <input
                                        className="w-full lg:w-[32.5rem] h-[3rem] text-left pl-2"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="relative p-[1px] box-border bg-white shadow-lg">
                                <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-r from-[rgb(249,115,22)] to-[rgb(234,88,12)] pointer-events-none"></div>
                                <div className="relative z-10 bg-white rounded-[inherit]">
                                    <input
                                        className="w-full lg:w-[32.5rem] h-[3rem] text-left pl-2"
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="relative p-[1px] box-border bg-white shadow-lg">
                            <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-r from-[rgb(249,115,22)] to-[rgb(234,88,12)] pointer-events-none"></div>
                            <div className="relative z-10 bg-white rounded-[inherit]">
                                <input
                                    className="w-full h-[3rem] text-left pl-2"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative p-[1px] box-border bg-white shadow-lg">
                            <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-r from-[rgb(249,115,22)] to-[rgb(234,88,12)] pointer-events-none"></div>
                            <div className="relative z-10 bg-white rounded-[inherit]">
                                <textarea
                                    className="w-full h-[10rem] text-left pl-2 pt-2"
                                    name="message"
                                    placeholder="Message"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <button className=" bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-lg px-6 text-xl w-36 text-white h-[2.5rem] mb-12">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <h1 className="text-6xl text-lime-600 font-semibold text-center mt-16">Testimonials</h1>
            <div className="w-[26rem] my-4 mx-auto">
                <div className="border-t border-lime-600 border-4"></div>
            </div>
            <div className="flex gap-8 mx-16 mt-32 ">
                <div className="card card-compact bg-base-100 w-96 shadow-xl py-4">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/fvJnS0k/testimonial.png"
                            alt="people1" className="w-20 h-20 rounded-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center w-full text-xl font-bold">Olivia Armania</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl py-4">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/fvJnS0k/testimonial.png"
                            alt="people1" className="w-20 h-20 rounded-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center w-full text-xl font-bold">Olivia Armania</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl py-4">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/fvJnS0k/testimonial.png"
                            alt="people1" className="w-20 h-20 rounded-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-center w-full text-xl font-bold">Olivia Armania</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
import React from 'react';
import banner from "../../../assets/banner.jpeg"
const About = () => {
    return (
        <div className="flex bg-white">
            <div className="mt-16 w-1/2 mx-12">
                <h1 className="text-6xl text-lime-600 font-semibold text-left">About Us</h1>
                <p className="text-2xl text-black text-justify w-[52rem] mt-8 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className="">
                <img src={banner} alt="about" className="h-[36rem] w-[48rem]" />
            </div>
        </div>
    );
};

export default About;
import React from 'react';

const row1 = [
    {
        id: 1,
        name: "Priya Nair",
        location: "Chennai",
        initial: "PN",
        bgColor: "bg-[#A855F7]",
        text: "The mentorship I received was exceptional. My mentor guided me through every challenge and the industry exposure was invaluable for a fresh graduate."
    },
    {
        id: 2,
        name: "Rohit Desai",
        location: "Pune",
        initial: "RD",
        bgColor: "bg-[#22C55E]",
        text: "Within two months of completing my VenuxLane internship, I received three job offers. The certificate really made my resume stand out to recruiters."
    },
    {
        id: 3,
        name: "Sneha Patel",
        location: "Mumbai",
        initial: "SP",
        bgColor: "bg-[#F97316]",
        text: "I was skeptical at first, but VenuxLane delivered on every promise. The projects were real, the feedback was honest, and the experience was priceless."
    },
    {
        id: 4,
        name: "Karan Mehta",
        location: "Delhi",
        initial: "KM",
        bgColor: "bg-[#EF4444]",
        text: "The UI/UX domain track was incredibly well-structured. I now work as a product designer at a startup and I owe a lot of it to VenuxLane."
    },
    {
        id: 5,
        name: "Divya Krishnan",
        location: "Hyderabad",
        initial: "DK",
        bgColor: "bg-[#14B8A6]",
        text: "VenuxLane's ML track is top-notch. I got to work on live data science projects and the letter of recommendation helped me secure a great placement."
    },
];

const row2 = [
    {
        id: 6,
        name: "Sneha Patel",
        location: "Mumbai",
        initial: "SP",
        bgColor: "bg-[#3B82F6]",
        text: "I was skeptical at first, but VenuxLane delivered on every promise. The projects were real, the feedback was honest, and the experience was priceless."
    },
    {
        id: 7,
        name: "Karan Mehta",
        location: "Delhi",
        initial: "KM",
        bgColor: "bg-[#EF4444]",
        text: "The UI/UX domain track was incredibly well-structured. I now work as a product designer at a startup and I owe a lot of it to VenuxLane."
    },
    {
        id: 8,
        name: "Divya Krishnan",
        location: "Hyderabad",
        initial: "DK",
        bgColor: "bg-[#14B8A6]",
        text: "VenuxLane's ML track is top-notch. I got to work on live data science projects and the letter of recommendation helped me secure a great placement."
    },
    {
        id: 9,
        name: "Aditya Rao",
        location: "Mysuru",
        initial: "AR",
        bgColor: "bg-[#6366F1]",
        text: "The structured program and weekly check-ins kept me on track. I built a full-stack app during my internship — something I couldn't have done alone."
    },
    {
        id: 10,
        name: "Meera Joshi",
        location: "Ahmedabad",
        initial: "MJ",
        bgColor: "bg-[#EC4899]",
        text: "From applying to getting certified, the whole journey was smooth and professional. VenuxLane truly cares about student success."
    },
    {
        id: 11,
        name: "Arjun Sharma",
        location: "Bengaluru",
        initial: "AS",
        bgColor: "bg-[#3B82F6]",
        text: "VenuxLane completely transformed my career trajectory. The real-world projects gave me the confidence and skills needed to land my dream job."
    }
];

const TestimonialCard = ({ testimonial }) => (
    <div className="w-[350px] md:w-[400px] shrink-0 p-4">
        <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex flex-col h-full hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex text-[#FFC107] text-sm gap-1 mb-6">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>

            <p className="text-[14px] md:text-[15px] font-medium text-slate-600 italic leading-relaxed flex-grow mb-8">
                "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
                <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} text-white flex items-center justify-center font-bold text-lg shrink-0`}>
                    {testimonial.initial}
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold text-slate-900 leading-none mb-1 text-[15px]">{testimonial.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{testimonial.location}</p>
                </div>
            </div>
        </div>
    </div>
);

const Carousel = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <style>
                {`
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marquee-left 40s linear infinite;
                    }
                    .animate-marquee-right {
                        animation: marquee-right 40s linear infinite;
                    }
                    .hover-pause:hover .animate-marquee-left,
                    .hover-pause:hover .animate-marquee-right {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <div className="container mx-auto px-4 lg:px-8 max-w-[90rem]">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-500/30 border-2 border-white mb-6">
                        <i className="fa-solid fa-star text-[10px]"></i>
                        TRUSTED BY 2,000+ STUDENTS
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-none mb-4">
                        Success <span className="underline decoration-[#003366] underline-offset-[12px] decoration-[6px]">Stories</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-2 md:gap-4 hover-pause relative -mx-4 lg:-mx-8 w-[100vw] lg:w-[calc(100vw-scrollbar)] overflow-hidden left-1/2 -translate-x-1/2">
                    {/* Row 1: Moves Left */}
                    <div className="flex w-max animate-marquee-left">
                        {[...row1, ...row1, ...row1, ...row1].map((testimonial, idx) => (
                            <TestimonialCard key={`row1-${idx}`} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Row 2: Moves Right */}
                    <div className="flex w-max animate-marquee-right pt-4">
                        {[...row2, ...row2, ...row2, ...row2].map((testimonial, idx) => (
                            <TestimonialCard key={`row2-${idx}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;

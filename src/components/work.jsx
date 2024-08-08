import React from "react";

function Work() {
    return (
        <section id="work" className="min-h-screen p-6 sm:p-12 md:p-24 bg-gray-100 flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 sm:text-3xl sm:mb-8 ">Work</h2>
            <p className="mb-8 sm:mb-12 text-center text-lg">Content for the Work section.</p>
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
                    GitHub Project 1
                </div>
                <div className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
                    GitHub Project 2
                </div>
                <div className="w-full sm:w-64 h-64 bg-white text-black border-4 border-slate-200 hover:bg-slate-200 flex items-center justify-center rounded-lg">
                    GitHub Project 3
                </div>
            </div>
        </section>
    );
}

export default Work;

import React from 'react'
import ManageStudentCard from './ManageRecruiterCard.jsx'
import AdminHeader from '../Header/AdminHeader.js';

let num = [1, 2, 3, 4, 5, 6, 7, 8]
const ManageRecruiter = () => {
    return (
        <>
        <AdminHeader />
         <div className='flex justify-between'>
                <h1 className="mx-8 font-bold py-2 px-0 text-[#1F3368] text-left text-2xl">Manage Recruiters </h1>
            <div className='flex'>
                <div class="flex">
                    <div class="mb-3 xl:w-96">
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />
                            <button
                                class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight tex shadow-md transition duration-150 ease-in-out hover:bg-[#1F3368]  hover:shadow-lg focus:bg-[#1F3368] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1F3368] active:shadow-lg"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* <div className='ml-10'><button type="button" className="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   self-center w-64 mt-1  ">A To Z</button></div> */}
                </div>
            </div>

            </div>
            <div>
                <div className="flex flex-wrap mx-32">
                    {num.map((number) => {
                        return (
                            <ManageStudentCard key={num} />
                        );
                    })}
                </div>
            </div>
            <div>footer</div>
        </>

    )
}

export default ManageRecruiter
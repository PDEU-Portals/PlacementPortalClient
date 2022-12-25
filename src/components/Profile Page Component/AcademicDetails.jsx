import React from 'react'

export const AcademicDetails = () => {
    return (
        <>
            <div className="bg-gray-200 rounded-3xl mx-4 py-4">
                <h2 className="mx-8 font-bold py-2 px-0">Academic Details</h2>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-6">
                    <table className="w-full text-sm text-left text-gray-500 ">

                        <tbody>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    Roll NO
                                </th>
                                <td className="py-4 px-6">
                                    21BCP111
                                </td>
                            </tr>
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    CGPA
                                </th>
                                <td className="py-4 px-6">
                                    7.7
                                </td>


                            </tr>
                            <tr className="bg-white  hover:bg-gray-50 ">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                    BRANCH
                                </th>
                                <td className="py-4 px-6">
                                    Computer Science and Engineering
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

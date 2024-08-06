import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
const Summary = ({ summary, setSummary }) => {
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token) {
            navigate('/login');
        }
    },[]);
    return (

        <div>
            <div className='flex justify-between py-8 px-16'>
                <NavLink to="/work" className="py-3 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">Back</NavLink>
            </div>
            <div className="w-full px-32 py-4">
                <h1 className="text-5xl text-blue-400 font-bold mb-6 text-center">Summary</h1>
                <textarea
                    name="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    rows="5"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default Summary;

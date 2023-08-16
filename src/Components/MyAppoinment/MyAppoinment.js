import React from 'react';
import { ImCross } from 'react-icons/im';

const MyAppoinment = () => {
    const MyAppoinment = [
        {
            _id: "01",
            patientName: "Imitaz Hossain",
            problem: "Anesthesiologist",
            doctorName: "Jousha Clark",
            slot: "9.00 - 14:00",
            date: "Wed Jul 12 2023",
            patientPhone: "018189721387",
        }
    ]
    return (
        <div className="overflow-x-auto p-6 shadow-lg">
            <p className='text-[25px] font-[600] mb-1 text-primary text-center'>My Appoinment</p>
            <p className='text-[15px] mb-4 text-[#FF0000] text-center'>*This route for only patient</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='bg-primary text-white p-3 flex flex-col gap-1 rounded-md'>
                    <p className='text-[20px] font-[500]'>Patient Name: <strong>Imtiaz Hossain</strong></p>
                    <p className='text-[18px] font-[500]'>Doctor: Dr. Ali Haider</p>
                    <p className='text-[15px] font-[300]'>Patient Phone: 102082398239</p>
                    <p className='text-[15px] font-[300]'>Patient Mail: shdfh@gmail.com</p>
                    <p className='text-[15px] font-[300]'>For: Anesthesiologist</p>
                    <p className='text-[15px] font-[300]'>Time: 9.00 - 14:00</p>
                    <p className='text-[15px] font-[300]'>Date: Wed Jul 12 2023</p>
                    <div className='mt-4 flex items-center justify-center gap-1'>
                        <button className='bg-white hover:bg-white border-0 btn btn-sm text-primary text-xs'>Cancel</button>
                    </div>
                </div>
                <div className='bg-primary text-white p-3 flex flex-col gap-1 rounded-md'>
                    <p className='text-[20px] font-[500]'>Patient Name: <strong>Imtiaz Hossain</strong></p>
                    <p className='text-[18px] font-[500]'>Doctor: Dr. Ali Haider</p>
                    <p className='text-[15px] font-[300]'>Patient Phone: 102082398239</p>
                    <p className='text-[15px] font-[300]'>Patient Mail: shdfh@gmail.com</p>
                    <p className='text-[15px] font-[300]'>For: Anesthesiologist</p>
                    <p className='text-[15px] font-[300]'>Time: 9.00 - 14:00</p>
                    <p className='text-[15px] font-[300]'>Date: Wed Jul 12 2023</p>
                    <div className='mt-4 flex items-center justify-center gap-1'>
                        <p className="text-white text-[15px]">✓ Confirmed</p>
                    </div>
                </div>
                <div className='bg-primary text-white p-3 flex flex-col gap-1 rounded-md'>
                    <p className='text-[20px] font-[500]'>Patient Name: <strong>Imtiaz Hossain</strong></p>
                    <p className='text-[18px] font-[500]'>Doctor: Dr. Ali Haider</p>
                    <p className='text-[15px] font-[300]'>Patient Phone: 102082398239</p>
                    <p className='text-[15px] font-[300]'>Patient Mail: shdfh@gmail.com</p>
                    <p className='text-[15px] font-[300]'>For: Anesthesiologist</p>
                    <p className='text-[15px] font-[300]'>Time: 9.00 - 14:00</p>
                    <p className='text-[15px] font-[300]'>Date: Wed Jul 12 2023</p>
                    <div className='mt-4 flex items-center justify-center gap-1'>
                        <p className="text-white text-[15px] flex items-center gap-[8px]"><ImCross /> Canceled</p>
                    </div>
                </div>
                <div className='bg-primary text-white p-3 flex flex-col gap-1 rounded-md'>
                    <p className='text-[20px] font-[500]'>Patient Name: <strong>Imtiaz Hossain</strong></p>
                    <p className='text-[18px] font-[500]'>Doctor: Dr. Ali Haider</p>
                    <p className='text-[15px] font-[300]'>Patient Phone: 102082398239</p>
                    <p className='text-[15px] font-[300]'>Patient Mail: shdfh@gmail.com</p>
                    <p className='text-[15px] font-[300]'>For: Anesthesiologist</p>
                    <p className='text-[15px] font-[300]'>Time: 9.00 - 14:00</p>
                    <p className='text-[15px] font-[300]'>Date: Wed Jul 12 2023</p>
                    <div className='mt-4 flex items-center justify-center gap-1'>
                        <p className="text-white text-[15px]">✓ Confirmed</p>
                    </div>
                </div>
                <div className='bg-primary text-white p-3 flex flex-col gap-1 rounded-md'>
                    <p className='text-[20px] font-[500]'>Patient Name: <strong>Imtiaz Hossain</strong></p>
                    <p className='text-[18px] font-[500]'>Doctor: Dr. Ali Haider</p>
                    <p className='text-[15px] font-[300]'>Patient Phone: 102082398239</p>
                    <p className='text-[15px] font-[300]'>Patient Mail: shdfh@gmail.com</p>
                    <p className='text-[15px] font-[300]'>For: Anesthesiologist</p>
                    <p className='text-[15px] font-[300]'>Time: 9.00 - 14:00</p>
                    <p className='text-[15px] font-[300]'>Date: Wed Jul 12 2023</p>
                    <div className='mt-4 flex items-center justify-center gap-1'>
                        <button className='bg-white hover:bg-white border-0 btn btn-sm text-primary text-xs'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAppoinment;
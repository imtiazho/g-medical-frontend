import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AppoinmentBookModal = ({ eachData, setOpenModal }) => {
    const [date, setDate] = useState(new Date());
    const [openModal2, setOpenModal2] = useState(null);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        toast.success('Thanks for book an appoinment!', {
            style: {
                border: '1px solid #4d93e9',
                padding: '13px',
                color: '#000',
                background: '#fff',
            },
            iconTheme: {
                primary: '#4d93e9',
                secondary: '#fff',
            },
        });
        navigate('/invoice-sec');
        setOpenModal(false);
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex flex-col lg:flex-row gap-12 items-center'>
                        <div className='w-[300px]'>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                            <p className='text-center'>Only {eachData?.doctorSchedule?.length} slots are Abailable on this date</p>
                        </div>
                        <form className='lg:pr-6 pr-0 lg:pt-7 pt-0 flex w-full flex-col gap-2'>
                            <input placeholder='Your Name' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input value={eachData?.designation} type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input value={eachData?.doctorName} type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <select className="border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg">
                                <option>09:00 - 14:00</option>
                                <option>13:00 - 17:00</option>
                                <option>10:00 - 13:00</option>
                                <option>09:00 - 14:00</option>
                            </select>
                            <input placeholder='Email' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input placeholder='Phone' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input onClick={handlesubmit} className='btn btn-primary text-white' type="submit" value='SUBMIT' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBookModal;
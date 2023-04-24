import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBookModal = () => {
    const [date, setDate] = useState(new Date());
    const [openModal2, setOpenModal2] = useState(null);


    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex gap-12 items-center'>
                        <div className='w-[300px]'>
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                            <p className='text-center'>Only 6 slots are Abailable on this date</p>
                        </div>
                        <form className='pr-6 pt-7 flex w-full flex-col gap-2'>
                            <input placeholder='Your Name' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input placeholder='Treatment Name' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input placeholder='Doctor Name' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <select className="border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg">
                                <option>Homer</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                            <input placeholder='Email' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input placeholder='Phone' type="text" className='border w-full focus:outline-0 bg-[#F7F7F7] p-[1rem] text-black rounded-lg' />
                            <input className='btn btn-primary text-white' type="submit" value='SUBMIT' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBookModal;
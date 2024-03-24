import {AiOutlineSearch} from 'react-icons/ai';
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Search(){
    return(
        <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
            <form action="">
                <div className="firstDiv flex justify-between items-center gap-[10px] rounded-[8px] bg-white p-5
                shadow-lg shadow-greyIsh-700">
                    <div className="flex items-center gap-2">
                        <AiOutlineSearch className='text-[25px] icon'/>
                        <input className='bg-transparent text-blue-500 focus:outline-none w-[100%]' type="text" placeholder="Search Job here.." />
                        <IoCloseCircleOutline className='text-[30px] icon text-[#a5a6a6] hover:text-textColor'/>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoHomeOutline className='text-[25px] icon'/>
                        <input className='bg-transparent text-blue-500 focus:outline-none w-[100%]' type="text" placeholder="Search by company" />
                        <IoCloseCircleOutline className='text-[30px] icon text-[#a5a6a6] hover:text-textColor'/>
                    </div>
                    <div className="flex items-center gap-2">
                        <CiLocationOn className='text-[25px] icon'/>
                        <input className='bg-transparent text-blue-500 focus:outline-none w-[100%]' type="text" placeholder="Search by Location" />
                        <IoCloseCircleOutline className='text-[30px] icon text-[#a5a6a6] hover:text-textColor' />
                    </div>
                    <button className='bg-blueColor p-5 px-10 rounded-[10px] text-white curson-pointer
                    hover:bg-blue-300'>Search</button>
                </div>
            </form>
            <div className='secDiv flex justify-center items-center gap-10'>
                <div className='singleSearch flex items-center gap-2'>
                    <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by: </label>
                    <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Starts With</option>
                        <option value="">Contains</option>
                    </select>
                    <label htmlFor="type" className='text-[#808080] font-semibold'>Sort by: </label>
                    <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Full-time</option>
                        <option value="">Remote</option>
                        <option value="">Contract</option>
                        <option value="">Part-time</option>
                    </select>
                    <label htmlFor="level" className='text-[#808080] font-semibold'>Sort by: </label>
                    <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value="">Senior</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Advocate</option>
                    </select>
                </div>
                <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
            </div>
        
        </div>
    )
}
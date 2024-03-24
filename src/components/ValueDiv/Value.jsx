import simple from '../../Assets/simple.png'
import social from '../../Assets/social.jpg'
import trust from '../../Assets/trust.png'
export default function Value(){
    return (
        <div className="mb-[4rem] mt-[6rem]">
            <h1 className="text-[25px] text-textColor py-[2rem] pb[3rem]
            font-bold w-[800px] block">The value that holds us true and to account</h1>
            <div className="grid gap-[10rem] grid-cols-3 items-center">
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px]
                    w-[100px] flex items-center justify center">
                        <img src={simple} alt="" className='w-[100%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Simplicity
                    </span>
                    </div>
                    <p className='text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold'>Things being made beautiful simple are at the heart of everything we do.</p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[100px]
                    w-[100px] flex items-center justify center">
                        <img src={social} alt="" className='w-[100%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Social Good
                    </span>
                    </div>
                    <p className='text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold'>
                        We believe in making things better for everyone ,even if just by a little bit!</p>
                </div>
                <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
                    <div className='flex items-center gap-3'>
                    <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[80px]
                    w-[80px] flex items-center justify center">
                        <img src={trust} alt="" className='w-[800%]'/>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>
                        Trust
                    </span>
                    </div>
                    <p className='text-textColor text-[13px] opacity-[.7] py-[1rem] font-semibold'>
                        We work on the basis of creating trust which can be nurtured through authenticity and transparency</p>
                </div>
            </div>
            <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem]
            rounded-[10px]">
                <h1 className='text-blueColor text-[30px] font-bold'>Ready to switch a career?</h1>
                <h2 className='text-textColor text-[25px] font-bold'>Let's get started together</h2>
            </div>
            <button className='border-[2px] rounded-[10px] py-[4px] px-[5px] font-semibold text-[18px] text-blueColor
            hover:bg-white border-blue'>Get Started</button>
        </div>
    )
}
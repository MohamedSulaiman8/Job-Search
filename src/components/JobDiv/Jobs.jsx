import {BiTimeFive} from 'react-icons/bi'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.webp'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.jpg'
import logo6 from '../../Assets/logo6.png'
import logo7 from '../../Assets/logo7.png'
import logo8 from '../../Assets/logo8.jpeg'
const Data=[
    {
        id:1,
        image:logo1,
        title:'Web Developer',
        time:'Now',
        location:'Canada',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Huawei Ltd'
    },
    {
        id:2,
        image:logo2,
        title:'UI Designer',
        time:'14Hrs',
        location:'Manchester',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Niel Accessmens'
    },
    {
        id:3,
        image:logo3,
        title:'Software Eng',
        time:'10Hrs',
        location:'Austria',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Spotify'
    },
    {
        id:4,
        image:logo4,
        title:'Ui/Ux Designer',
        time:'10H',
        location:'Germany',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Linked In'
    },
    {
        id:5,
        image:logo5,
        title:'Product Designer',
        time:'Now',
        location:'Manchester',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Netflix'
    },
    {
        id:6,
        image:logo6,
        title:'Researcher',
        time:'5Hrs',
        location:'Norway',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Instagram'
    },
    {
        id:7,
        image:logo7,
        title:'Lead Developer',
        time:'14Hr',
        location:'Leeds',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Google'
    },
    {
        id:8,
        image:logo8,
        title:'Data Scientist',
        time:'2 Days',
        location:'Germany',
        desc:'Lorem prehenderit, delectus fugit nisi eaquuasi sequi laborum voluptates, voluptatibus quod quia rerum pariatur quas.',
        company:'Amazon'
    }
]
export default function Jobs(){
    return (
        <div>
            <div className="jobContainer flex flex-wrap gap-10 justify-center items-center py-10">
                {Data.map(data=>{
                    return(
                        <div key={data.id} className="singeJob group group/item w-[250px] p-[20px]
                    bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                       <span className="flex justify-between items-center gap-3">
                           <h1 className="text-[16px] font-semibold text-textColor
                           group-hover:text-white">
                               {data.title}
                           </h1>
                           <span className='flex items-center gap-1 text-[#ccc]'>
                               <BiTimeFive/>{data.time}
                           </span>
                       </span>
                       <h6 className='text-[#ccc]'>{data.location}</h6>
                       <p className=' block text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                       group-hover:text-white'>
                        {data.desc}
                       </p>
                       <div className='company flex items-center gap-2'>
                           <img src={data.image} alt="Company logo" className='w-[10%]' />
                           <span className='text-[14px] py-[1rem] block group-hover:text-white'>{data.company}</span>
                           </div>
                           <button className='rounded-[10px] bg-blueColor text-[14px] border-[2px] block p-[10px] w-full
                           hover:bg-white group-hover/item:text-textColor  group-hover:text-white font-semibold text-textColor'>Apply Now</button>
                    </div>
                    )
                })}
                </div>
        </div>
    )
}
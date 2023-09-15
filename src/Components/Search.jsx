import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Search() {
    const [Data, setData] = useState({})
    const [inp, setinp] = useState("")

    const submit = async() => {
        console.log("he");
        try {
            const res = await fetch(`https://api.github.com/users/${inp}`)
            const data = await res.json()
            setData(data)
            if(data.message) toast("Not found")
        } catch (error) { 
            alert(error)  
            toast("No profile found")
        }

        setinp("")
    }
    console.log(Data);
    function convertDateFormat(inputDate) {
        const date = new Date(inputDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }
    

    return (
        <div>
            <div className='pt-16 px-2 md:px-16'>
            <ToastContainer />

                <div class="flex flex-col p-2 py-6 m-h-screen">

                    <div class="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky" style={{ top: "5px" }}>

                        <div>

                            <div class="p-2 mr-1 rounded-full hover:bg-gray-100 cursor-pointer">

                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor"></path>
                                </svg>

                            </div>

                        </div>

                        <input class="font-bold  rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" value={inp} onChange={(e) => setinp(e.target.value)} type="text" placeholder="Search" />

                        <button class="bg-gray-600 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded-full" onClick={submit}>

                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>

                        </button>

                    </div>




                </div>
                <div className='flex items-center justify-center'>

                    {Object.keys(Data).length !== 0 && !Data?.message   && <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500 ">
                        <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full" />
                        <div class="flex justify-center -mt-8">
                            <img src={Data.avatar_url} style={{ height: "100px", width: "100px" }} class="rounded-full border-solid border-white border-2 -mt-3" />
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class="text-white text-xl font-bold font-sans">{Data.login}</h3>
                            <p class="mt-2 font-sans font-semibold text-white">{Data.name}</p>
                            <p class="mt-2 font-sans font-light text-white">Profile created at {convertDateFormat(Data.created_at)}</p>
                        </div>
                        <div class="flex justify-center pb-3 text-white">
                            <div class="text-center mr-3 border-r pr-3">
                                <h2 className='text-xl'>{Data.public_repos}</h2>
                                <span>Public repo</span>
                            </div>
                            <div class="text-center">
                                <h2 className='text-xl'>{Data.public_gists}</h2>
                                <span>public gists</span>
                            </div>
                        </div>
                        <div className='text-center px-3 pb-6 pt-2 '>

                        <a href={Data.url} className='border-2 px-4 py-2 bg-[#f07167] rounded-lg cursor-pointer hover:bg-opacity-50 hover:text-white text-xl' >Vist Profile</a>
                        </div>
                    </div> 
                    }
                </div>



            </div>
        </div>
    )
}

export default Search
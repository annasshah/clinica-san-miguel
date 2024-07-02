import React, { FC, useState } from 'react'
import DatePicker from 'react-date-picker';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
    data: any

}

const ScheduleDateTime: FC<Props> = ({ data }) => {

    const [date, setdate] = useState<Date>(new Date())

    const dateTimeChangeHandle = (e: Date) => {
        console.log({ e, typeof: typeof e, day: e.getDay(), data })
        setdate(e)
    }
    return (
        <div className="flex flex-col md:flex-row justify-center w-full gap-5 items-center">
            <div
                className={` flex flex-col items-start ${false ? "md:w-1/2" : ""
                    } justify-center`}
            >
                <label className="text-[16px] text-customGray font-poppins font-bold">
                   Select Schedule Date:
                </label>



                <ReactDatePicker
                    selected={date}
                    onChange={dateTimeChangeHandle}
                    placeholderText={"Select Schedule date"}
                    dateFormat="yyyy-MM-dd"
                    className="w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]"
                />
                
            </div>

            <div
                className={` flex flex-col items-start ${false ? "md:w-1/2" : ""
                    } justify-center`}
            >
                <label className="text-[16px] text-customGray font-poppins font-bold">
                Select Schedule Time:
                </label>



               
                <select className='w-full h-[46px] border-[1px] border-[#000000] text-[16px] text-[#000000] placeholder:text-customGray placeholder:text-opacity-50 px-5 bg-transparent outline-none rounded-[10px]'>
                    <option>
                        10:00 AM
                    </option>
                    <option>
                        11:00 AM
                    </option>
                    <option>
                        12:00 PM
                    </option>
                    <option>
                        01:00 PM
                    </option>
                    <option>
                        02:00 PM
                    </option>
                    <option>
                        03:00 PM
                    </option>
                    <option>
                        04:00 PM
                    </option>
                </select>
            </div>
        </div>
    )
}

export default ScheduleDateTime

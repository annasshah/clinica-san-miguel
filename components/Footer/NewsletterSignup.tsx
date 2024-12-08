// 'use client'
import { supabase } from '@/supabaseClient';
import { useTranslations } from 'next-intl';
import React, { FC, FormEvent } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { toast } from 'react-toastify';

interface Props {

}

const NewsletterSignup: FC<Props> = () => {
    const t = useTranslations("common");


    const [email, setEmail] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);



    const onChangeHandler = (val: string) => {
        setEmail(val)

    }


    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)
        if(email){
            try {
                const { data, error } = await supabase
                    .from('Newsletter')
                    .insert([
                        { email },
                    ])
                    .select()
    
                if (data) {
                    toast.success('Email has been recorded!')
                    setEmail("")
                }
                if (error) {
                    throw error
                }
    
            } catch (error:any) {
                toast.error(error.message);
            }
        }
        setLoading(false)
    }






    return (
        <form onSubmit={submitHandler} className="bg-[#F8F5F0] h-[55px] w-[296px] rounded-[10px] md:rounded-[5px] flex justify-between items-center p-2">
            <input
                required={true}
                type='email'
                onChange={(e) => onChangeHandler(e.target.value)}
                value={email}
                placeholder={t("footer_email_input_placeholder")}
                className="placeholder:text-[14px] placeholder:text-[#A2A9B0] text-[16px] outline-none border-none focus:outline-offset-0 focus:ring-offset-0 focus:outline-none 
                focus:shadow-none
                focus:ring-0
                text-[#000000] bg-transparent w-full pr-2"
            />

            <button disabled={loading} type='submit' className="rounded-full aspect-square bg-[#19192C] text-[24px] text-white w-[40px] h-[40px] flex justify-center disabled:bg-gray-500 items-center">
                <IoIosArrowForward />
            </button>
        </form>
    )
}

export default NewsletterSignup
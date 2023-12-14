import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const UserExperience = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dzt3p8i', 'template_30rdpmg', form.current, 'zGx8edpzuZtxO5hSY')
            .then((result) => {
                console.log(result.text);
                console.log('first')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <h1 className="text-center uppercase font-extrabold text-4xl my-10">Your Experience </h1>
            {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='bg-white' type="submit" value="Send" />
    </form> */}

            <form  ref={form} onSubmit={sendEmail} className='space-y-3'>
                <div className='flex gap-10'>
                    <input type="text" name="user_name" required  placeholder="Name" className="input input-bordered w-full" />
                    <input type="email" required name="user_email" placeholder="Email" className="input input-bordered w-full " />
                </div>
                <textarea name="message"  required className="h-72 textarea textarea-bordered w-full" placeholder="message"></textarea>
                <button type='submit' className="btn w-full text-lg hover:bg-[#F5AB35] bg-[#F5AB35] text-white"> Submit</button>
            </form>

        </div>
    );
};

export default UserExperience;
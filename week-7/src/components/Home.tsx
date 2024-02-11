import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useRecoilState } from "recoil";
import {phoneAtom} from '../store/atoms'

interface FormData {
  phone: string;
}
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const schema = z.object({
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

const Home: React.FC = () => {
  const [formData, setFormData] = useRecoilState<FormData>(phoneAtom);
  
  const navigateTo = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      const result = schema.safeParse({phone: formData.phone});
      if (result.success == true) {
        //Some BE calls
        // console.log(formData.phone);
        navigateTo("/otp");
      }else{
        console.error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, phone: e.target.value });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col items-center">
          <div className="py-4 text-4xl">
            <h1>Login via OTP</h1>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center"
          >
            <input
              className="my-8 bg-slate-950 border-2 border-white rounded-md w-full"
              type="text"
              placeholder="Enter your mobile number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <button
              className="border-2 border-white rounded-md w-1/2"
              type="submit"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;

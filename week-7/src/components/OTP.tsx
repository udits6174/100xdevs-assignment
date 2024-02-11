import { useRef, useState, useEffect} from "react";
import { useRecoilValue } from "recoil";
import {phoneAtom} from '../store/atoms'

const OTP: React.FC = () => {
    const phoneState = useRecoilValue(phoneAtom);

    const [otp, setOtp] = useState(["", "", "", ""]);
    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (input1.current) {
            input1.current.focus();
        }
      }, []);
      const handleKeyDown = (prevInput : React.RefObject<HTMLInputElement>) => (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Backspace" && prevInput.current) {
            // Move focus to the previous input field on backspace
            prevInput.current.focus();
          }
      }
    const handleChange = (index: number, nextInput? : React.RefObject<HTMLInputElement>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (isNaN(value)) return;
    
        const newOtp = [...otp];
        // allow only one input
        newOtp[index-1] = value.substring(value.length - 1);
        setOtp(newOtp);
    
        // submit trigger
        const combinedOtp = newOtp.join("");
        //send to BE
        console.log(combinedOtp);
    
        // Move to next input if current field is filled
        if (value && index < 4 && nextInput && nextInput.current) {
            nextInput.current.focus();
        }
      };
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen text-black">
      <div>
        <h1 className="text-white">OTP sent to: {phoneState.phone}</h1>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <input ref={input1} onChange={handleChange(1, input2)} value={otp[0]} className="w-12 h-12 rounded-lg" type="text"/>
        </div>
        <div>
          <input ref={input2} onChange={handleChange(2, input3)} value={otp[1]} onKeyDown={handleKeyDown(input1)} className="w-12 h-12 rounded-lg" type="text" />
        </div>
        <div>
          <input ref={input3} onChange={handleChange(3, input4)} value={otp[2]} onKeyDown={handleKeyDown(input2)} className="w-12 h-12 rounded-lg" type="text" />
        </div>
        <div>
          <input ref={input4} onChange={handleChange(4)} value={otp[3]} onKeyDown={handleKeyDown(input3)} className="w-12 h-12 rounded-lg" type="text"/>
        </div>
      </div>
    </div>
  );
};

export default OTP;

import { useCallback } from "react";
import { FormControlLabel, Checkbox, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavigationMenu from "../components/navigation-menu";
import FormInputsRowContainer from "../components/form-inputs-row-container";

const ResultsPage = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-42xl text-white font-roboto">
      <header className="self-stretch bg-white h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden"
            onClick={onFickleflightLogoClick}
          >
            <img
              className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/symbols.svg"
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
            <NavigationMenu />
            <div className="flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden hidden md:flex"
                alt=""
                src="/notification.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden"
                alt=""
                src="/notification1.svg"
              />
              <img
                className="rounded-19xl w-9 h-9 object-cover"
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start font-baloo-bhai">
        <div className="self-stretch relative h-[362px] sm:h-[480px]">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
          <img
            className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/banner-background1@2x.png"
          />
          <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col py-0 px-20 box-border items-center justify-center gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[67px] md:text-23xl md:leading-[48px] sm:text-[31px] sm:leading-[40px]">
                Where are you off too?
              </div>
            </div>
            <FormInputsRowContainer
              propBorderRadius="10px"
              propBackgroundColor="#fff"
              propPadding="20px"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-[50px] px-20 items-start justify-center text-3xl text-dimgray-200 lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <div className="relative w-[350.5px] h-[667px] lg:hidden">
          <div className="absolute top-[0px] left-[0px] w-[311.5px] h-[47px] text-xl">
            <div className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[219.41px]">
              10 out of 177 Results
            </div>
            <img
              className="absolute top-[46.5px] left-[0px] max-h-full w-[311.5px]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="absolute top-[231.4px] left-[0px] w-[221px] h-[106px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[189.03px]">
              Booking Options
            </b>
            <FormControlLabel
              className="absolute top-[50px] left-[0px]"
              label="Book on Fickleflight"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[86px] left-[0px]"
              label="Official Airline Websites"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
          </div>
          <div className="absolute top-[376.6px] left-[0px] w-[310.8px] h-[106px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[198.04px]">
              Flight Experience
            </b>
            <FormControlLabel
              className="absolute top-[50px] left-[0px]"
              label="No overnight flights"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[86px] left-[0px]"
              label="No long stop-overs"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <div className="absolute top-[561px] left-[0px] w-[181px] h-[106px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[87.77px]">
              Airlines
            </b>
            <FormControlLabel
              className="absolute top-[50px] left-[0px]"
              label="Singapore Airlines"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[86px] left-[0px]"
              label="Qatar Airways"
              labelPlacement="end"
              control={<Checkbox color="primary" size="medium" />}
            />
          </div>
          <div className="absolute top-[86.2px] left-[0px] w-[296.62px] h-[106px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[65.26px]">
              Stops
            </b>
            <FormControlLabel
              className="absolute top-[50px] left-[0px]"
              label="1 Stop"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
            <FormControlLabel
              className="absolute top-[86px] left-[0px]"
              label="2 Stops"
              labelPlacement="end"
              control={<Checkbox size="medium" />}
            />
          </div>
          <img
            className="absolute top-[521.3px] left-[0px] max-h-full w-[350.5px]"
            alt=""
            src="/vector-5.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] text-base">
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                alt=""
                src="/turkish.svg"
              />
              <div className="relative tracking-[0.26px]">Turkish Airlines</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  11:35 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  33H 10M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  4:45 PM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 723</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] text-center border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                alt=""
                src="/sia.svg"
              />
              <div className="relative tracking-[0.26px] inline-block w-[140px] shrink-0">
                Singapore Airlines
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-left text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  8:45 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[129px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  15H 10M, 2-stops
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  7:55 PM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                alt=""
                src="/japan.svg"
              />
              <div className="relative tracking-[0.26px]">Japan Airlines</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  8:20 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[6.33%] bottom-[72.54%] left-[5.15%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  17H 30M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  9:50 PM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                alt=""
                src="/ana.svg"
              />
              <div className="relative tracking-[0.26px]">ANA</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  6:35 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  19H 15M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  9:50 PM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 936</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] text-center border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px]"
                alt=""
                src="/americanairlines.svg"
              />
              <div className="relative tracking-[0.26px]">
                American Airlines
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-left text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  8:20 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  17H 30M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  9:50 AM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 939</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] sm:[transform:scale(0.8)]"
                alt=""
                src="/turkish.svg"
              />
              <div className="relative tracking-[0.26px]">Turkish Airlines</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  11:35 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[129px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  33H 10M, 2-stops
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  4:45 PM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 673</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px] [transform:scale(0.8)]"
                alt=""
                src="/japan1.svg"
              />
              <div className="relative tracking-[0.26px]">Japan Airlines</div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  10:25 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  26H 45M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  9:10 AM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-white flex flex-row py-0 px-[25px] items-center justify-center gap-[50px] text-center border-[0.7px] border-solid border-lightgray sm:flex-col sm:py-5 sm:px-0 sm:box-border">
            <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important] sm:ml-10">
              <img
                className="relative w-[34.77px] h-[46px]"
                alt=""
                src="/americanairlines1.svg"
              />
              <div className="relative tracking-[0.26px]">
                American Airlines
              </div>
            </div>
            <div className="flex-1 flex flex-row items-center justify-between w-[64%] text-left text-2xl text-cornflowerblue-200 md:flex-row sm:w-[90%] sm:flex-row sm:p-0 sm:box-border sm:mr-[0px!important] sm:flex-[unset] sm:self-stretch mq428small:w-[90%]">
              <div className="relative w-[93px] h-[52px] mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  10:25 PM
                </div>
                <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  SIN
                </div>
              </div>
              <div className="relative w-[121px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                <img
                  className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/flighticon1.svg"
                />
                <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                  26H 45M, 1-stop
                </div>
              </div>
              <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
                <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                  9:10 AM
                </div>
                <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block">
                  LAX
                </div>
              </div>
            </div>
            <div className="w-32 flex flex-row items-center justify-center text-5xl text-orange-100">
              <img
                className="relative max-w-full overflow-hidden h-[100px] sm:hidden"
                alt=""
                src="/vector-1.svg"
              />
              <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[220px] h-[72px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
            <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] text-lg tracking-[0.04em] font-medium font-roboto text-white text-center">
              Show more results
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-center text-lg text-cornflowerblue-300">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="/newsletter-section-background1@2x.png"
            />
            <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-11xl text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch rounded-xl bg-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[34px]">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                  <div className="overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-left">
                      submit
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-white font-roboto lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
              <img
                className="relative w-[174px] h-[33px] overflow-hidden"
                alt=""
                src="/logo1.svg"
              />
              <div className="self-stretch relative leading-[27px]">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px]"
                alt=""
                src="/social-icons1.svg"
              />
            </div>
            <div className="relative box-border w-px h-[157.87px] border-r-[1px] border-solid border-gray-200 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
                  About Us
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
                  Company
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
                  News
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
                  Careers
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  How we work
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px] sm:mb-[40px!important]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
                  Account
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
                  Support
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
                  Support Center
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
                  FAQ
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
                  Accessibility
                </div>
              </div>
              <div className="relative w-[197.33px] h-[159.76px]">
                <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
                  Covid Advisory
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
                  More
                </div>
                <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
                  Airline Fees
                </div>
                <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
                  Tips
                </div>
                <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                  Quarantine Rules
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

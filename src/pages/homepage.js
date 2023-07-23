import { useState, useCallback } from "react";
import { FormControlLabel, Radio, TextField } from "@mui/material";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import FormInputsRowContainer from "../components/form-inputs-row-container";

const Homepage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] text-center text-lg text-white font-roboto hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
        <div className="self-stretch flex flex-col items-center justify-start text-42xl font-baloo-bhai">
          <header className="self-stretch bg-white h-[77px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden">
                <img
                  className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/symbols1.svg"
                />
              </button>
              <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
                    Explore
                  </button>
                  <div
                    className="relative cursor-pointer"
                    onClick={onSearchTextClick}
                  >
                    Search
                  </div>
                  <div
                    className="relative cursor-pointer"
                    onClick={onHotelsTextClick}
                  >
                    Hotels
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
                    Offers
                  </button>
                </div>
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
          <div className="self-stretch relative h-[640px]">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
            <img
              className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
              alt=""
              src="/banner--background@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
                <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                <div className="self-stretch relative text-5xl leading-[32px] font-roboto">
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-white flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-roboto md:flex-col sm:mt-5">
                <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
                  <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke sm:flex-[unset] sm:self-stretch">
                    Search flights
                  </b>
                  <div className="flex flex-row items-center justify-start sm:w-full">
                    <div className="relative w-[216.53px] h-[38px] sm:w-[100%!important]">
                      <FormControlLabel
                        className="absolute top-[0px] left-[0px]"
                        label="Return"
                        labelPlacement="end"
                        control={<Radio size="medium" />}
                      />
                      <FormControlLabel
                        className="absolute top-[0px] left-[106px]"
                        label="One-way"
                        labelPlacement="end"
                        control={
                          <Radio color="primary" checked size="medium" />
                        }
                      />
                    </div>
                  </div>
                </div>
                <FormInputsRowContainer
                  onSearchFlightsButtonClick={onSearchFlightsButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] text-left text-darkslategray-300 md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] md:block">
            <b className="relative tracking-[0.04em] uppercase inline-block w-[1268.05px]">
              Upcoming Flight
            </b>
            <div className="self-stretch flex flex-row items-start justify-start gap-[36px] text-5xl text-cornflowerblue-300 md:flex-col">
              <div className="rounded-lg flex flex-col p-5 items-start justify-start gap-[21px] border-[1px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative w-[72px] h-[46px]">
                    <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
                      SIN
                    </b>
                    <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[72px]">
                      Singapore
                    </div>
                  </div>
                  <div className="relative w-[117.35px] h-[44.09px] text-sm text-gray-100">
                    <b className="absolute top-[28.09px] left-[23.69px] tracking-[0.02em] capitalize inline-block w-[65.66px]">
                      15H 55M
                    </b>
                    <img
                      className="absolute top-[0px] left-[0px] w-[117.35px] h-6"
                      alt=""
                      src="/flight-icons.svg"
                    />
                  </div>
                  <div className="relative w-[87.27px] h-[46px] text-right">
                    <b className="absolute top-[0px] left-[36px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
                      LAX
                    </b>
                    <div className="absolute top-[30px] left-[0px] text-sm tracking-[0.02em] capitalize text-gray-100 inline-block w-[87.27px]">
                      Los Angeles
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-whitesmoke md:w-full" />
                <div className="self-stretch flex flex-row items-center justify-between text-sm text-gray-100">
                  <div className="relative tracking-[0.02em] capitalize inline-block w-[203.9px] shrink-0">
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className="relative tracking-[0.02em] text-right inline-block w-[87.23px] shrink-0">
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-px h-[145.99px] border-r-[1px] border-solid border-whitesmoke md:hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[20px] text-lg text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch relative tracking-[0.04em] uppercase">
                  Prepare for your trip
                </div>
                <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
                    onClick={onHotelClick}
                  >
                    <img
                      className="relative w-[65.39px] h-[65.39px]"
                      alt=""
                      src="/hotel-icon.svg"
                    />
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-left">
                      Hotel
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[65.39px] h-[65.39px]">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/ticket.svg"
                      />
                    </div>
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                      Attractions
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[65.39px] h-[65.39px]"
                      alt=""
                      src="/eats-icon.svg"
                    />
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                      Eats
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[65.39px] h-[65.39px]">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector4.svg"
                      />
                    </div>
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                      Commute
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[70px] h-[65.39px]">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-[65.39px]" />
                      <img
                        className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector5.svg"
                      />
                    </div>
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[32.12px]">
                      Taxi
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <div className="relative w-[65.39px] h-[65.39px]">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-[65.39px] h-[65.39px]" />
                      <img
                        className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector6.svg"
                      />
                    </div>
                    <div className="relative text-mini tracking-[0.04em] font-roboto text-gray-100 text-center">
                      Movies
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-cornflowerblue-300">
            <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  Plan your next trip
                </b>
                <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
                  Most Popular Destinations
                </b>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[231.38px] flex flex-row items-start justify-start gap-[10px] md:hidden">
                <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[197.33px] shrink-0">
                  View all destinations
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden"
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/parisimage@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                    <b className="flex-1 relative text-xl tracking-[0.02em] font-roboto text-white text-left">
                      Paris
                    </b>
                    <div className="relative w-[90.92px] h-[59px]">
                      <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-white text-right inline-block w-[90.92px]">
                        $699
                      </div>
                      <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-roboto text-white text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/greeceimage@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                    <b className="flex-1 relative text-xl tracking-[0.02em] font-roboto text-white text-left">
                      Greece
                    </b>
                    <div className="relative w-[99.92px] h-[59px]">
                      <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-white text-right">
                        $1079
                      </div>
                      <div className="absolute top-[0px] left-[47.39px] text-base tracking-[0.04em] uppercase font-roboto text-white text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/norwayimage@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                    <b className="flex-1 relative text-xl tracking-[0.02em] font-roboto text-white text-left">
                      Norway
                    </b>
                    <div className="relative w-[90.92px] h-[59px]">
                      <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-white text-right inline-block w-[90.92px]">
                        $895
                      </div>
                      <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-roboto text-white text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                <div className="self-stretch relative rounded-3xs h-[182px] overflow-hidden">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/tuscanyimage@2x.png"
                  />
                  <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                    <b className="flex-1 relative text-xl tracking-[0.02em] font-roboto text-white text-left">
                      Tuscany
                    </b>
                    <div className="relative w-[100.62px] h-[59px]">
                      <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-white text-right inline-block w-[100.62px]">
                        $1245
                      </div>
                      <div className="absolute top-[0px] left-[48.09px] text-base tracking-[0.04em] uppercase font-roboto text-white text-right inline-block w-[52.53px]">
                        from
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="rounded-12xl bg-white w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
              <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-auto">
                View all destinations
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden"
                alt=""
                src="/arrowright1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-11xl">
            <div className="self-stretch flex flex-row items-center justify-start">
              <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
                Recommended Holidays
              </b>
              <button className="cursor-pointer [border:none] p-0 bg-white rounded-12xl w-[199.89px] flex flex-row items-start justify-start gap-[10px] md:hidden">
                <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[165.89px] shrink-0">
                  View all holidays
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden"
                  alt=""
                  src="/arrowright2.svg"
                />
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start min-w-[230px] w-3/12 md:w-6/12 md:mb-8 sm:min-w-[250px] sm:w-full sm:mb-8">
                <img
                  className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] object-cover"
                  alt=""
                  src="/unsplash5mv818tzxeo@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
                        Bali
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-darkgray text-left">
                        4D3N
                      </div>
                    </div>
                    <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                      $899
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start min-w-[230px] w-3/12 md:w-6/12 md:mb-8 sm:min-w-[250px] sm:w-full sm:mb-8">
                <img
                  className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] object-cover"
                  alt=""
                  src="/switzerlandimage@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
                        Swiss
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-darkgray text-left">
                        6D5N
                      </div>
                    </div>
                    <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                      $900
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start min-w-[230px] w-3/12 md:w-6/12 sm:min-w-[250px] sm:w-full sm:mb-8">
                <img
                  className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] object-cover"
                  alt=""
                  src="/boracayimage@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
                        Boracay
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-darkgray text-left">
                        5D4N
                      </div>
                    </div>
                    <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                      $699
                    </div>
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start min-w-[230px] w-3/12 md:w-6/12 sm:min-w-[250px] sm:w-full">
                <img
                  className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] object-cover"
                  alt=""
                  src="/palawanimage@2x.png"
                />
                <div className="self-stretch rounded-t-none rounded-b-3xs bg-white flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                      <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-roboto text-darkslategray-200 text-left">
                        Palawan
                      </div>
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-darkgray text-left">
                        4D3N
                      </div>
                    </div>
                    <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                      $789
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="rounded-12xl bg-white w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
              <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-auto">
                View all holidays
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden"
                alt=""
                src="/arrowright3.svg"
              />
            </div>
          </div>
          <form className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 relative h-[35px]">
                <b className="absolute top-[0px] left-[0px] text-11xl tracking-[0.04em] capitalize inline-block font-roboto text-darkslategray-300 text-left w-[1105.34px] sm:text-3xl">
                  Popular Stays
                </b>
              </div>
              <button
                className="cursor-pointer [border:none] p-0 bg-white rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
                onClick={onViewAllStaysButtonClick}
              >
                <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0">
                  View all stays
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden"
                  alt=""
                  src="/arrowright2.svg"
                />
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
              <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
                    alt=""
                    src="/unsplashrlwe8f8anoc@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-100 text-left">
                        Entire bungalow
                      </div>
                      <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left sm:text-xl">
                        Matterhorn Suites
                      </b>
                      <div className="self-stretch relative text-lg tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                        $575/night
                      </div>
                    </div>
                    <img
                      className="relative w-[25px] h-[25px] overflow-hidden cursor-pointer"
                      alt=""
                      src="/video2.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="self-stretch relative h-[19px]">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[216.37px]">
                      (60 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                        4.9
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector7.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                      More details
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
                    alt=""
                    src="/unsplashtsn8bpopveo@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-100 text-left">
                        2-Story beachfront suite
                      </div>
                      <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left sm:text-xl">
                        Discovery Shores
                      </b>
                      <div className="self-stretch relative text-lg tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                        $360/night
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative h-[19px]">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[216.37px]">
                      (116 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                        4.8
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector8.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                      More details
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
                    alt=""
                    src="/unsplashrlwe8f8anoc1@2x.png"
                  />
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-100 text-left">
                        Single deluxe hut
                      </div>
                      <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left">{`Arctic Hut `}</b>
                      <div className="self-stretch relative text-lg tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                        $420/night
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative h-[19px]">
                    <div className="absolute top-[0px] left-[53.73px] text-base tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[216.27px]">
                      (78 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.38px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.38px] text-base tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                        4.7
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.58%] top-[0%] right-[62.42%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector9.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                      More details
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]">
                  <img
                    className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] object-cover"
                    alt=""
                    src="/unsplashyqrybvxug5q@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="self-stretch relative text-base tracking-[0.02em] font-roboto text-gray-100 text-left">
                        Deluxe King Room
                      </div>
                      <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize font-roboto text-darkslategray-300 text-left">
                        Lake Louise Inn
                      </b>
                      <div className="self-stretch relative text-lg tracking-[0.04em] font-roboto text-darkslategray-300 text-left">
                        $244/night
                      </div>
                    </div>
                    <img
                      className="relative w-[25px] h-[25px] overflow-hidden cursor-pointer"
                      alt=""
                      src="/video3.svg"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className="self-stretch relative h-[19px]">
                    <div className="absolute top-[0px] left-[53.63px] text-base tracking-[0.04em] font-roboto text-cornflowerblue-200 text-left inline-block w-[216.37px]">
                      (63 reviews)
                    </div>
                    <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px]">
                      <div className="absolute top-[0px] left-[20.34px] text-base tracking-[0.04em] font-medium font-roboto text-darkslategray-300 text-left">
                        4.6
                      </div>
                      <img
                        className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/vector10.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch rounded box-border h-[46px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-cornflowerblue-200 text-left">
                      More details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-12xl bg-white hidden flex-row items-start justify-start gap-[10px] md:flex md:mt-4">
              <div className="relative text-lg tracking-[0.04em] font-medium font-roboto text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0 md:w-auto">
                View all stays
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden"
                alt=""
                src="/arrowright4.svg"
              />
            </div>
          </form>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
          <div className="self-stretch relative bg-aliceblue h-[529px] overflow-hidden">
            <img
              className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
              alt=""
              src="/subscribe-section-background@2x.png"
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
                src="/logo2.svg"
              />
              <div className="self-stretch relative leading-[27px]">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="relative w-[130px] h-[30px]"
                alt=""
                src="/social-icons2.svg"
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
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;

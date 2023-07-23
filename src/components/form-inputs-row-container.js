import { useState, useMemo } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FormInputsRowContainer = ({
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  onSearchFlightsButtonClick,
}) => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const formInputsRowStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBorderRadius, propBackgroundColor, propPadding]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className="self-stretch flex flex-row items-start justify-start md:flex-col"
        style={formInputsRowStyle}
      >
        <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
          <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Departure"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
              size="medium"
            />
          </div>
          <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
            <Autocomplete
              className="self-stretch"
              sx={{ width: "100%" }}
              disablePortal
              options={[
                "Clark (CRK)",
                "Launceston (LST)",
                "Kalibo (KLO)",
                "Colombo CMB",
                "Melbourne (AVV)",
                "Los Angeles (LA)",
              ]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Arrival"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Los Angeles (LA)"
              size="medium"
            />
          </div>
          <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch">
              <DatePicker
                label="Date"
                value={selectOutlinedDateTimePickerValue}
                onChange={(newValue) => {
                  setSelectOutlinedDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    color: "primary",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-[5px] items-center justify-center md:w-full md:text-left">
          <button
            className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 overflow-hidden flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
            onClick={onSearchFlightsButtonClick}
          >
            <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-roboto text-white text-center inline-block w-[146.98px]">
              Search flights
            </div>
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default FormInputsRowContainer;

import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSelectorMUI = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "kh") document.body.classList.add("kh-font");
    else document.body.classList.remove("kh-font");
  };

  return (
    <Select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      size="small"
      variant="standard" // removes the outline/border
      sx={{
        "&:before, &:after": { borderBottom: "none" }, // remove underline
        "& .MuiSelect-select": { padding: 0 }, // optional: remove extra padding
        minWidth: 32,
      }}
    >
      <MenuItem value="en">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g clipPath="url(#GB_svg__a)">
            <path
              d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
              fill="#F0F0F0"
            />
            <path
              d="M2.48 4.693A11.956 11.956 0 0 0 .413 8.868h6.243L2.48 4.693Zm21.106 4.176a11.957 11.957 0 0 0-2.067-4.176L17.344 8.87h6.242ZM.413 15.13a11.957 11.957 0 0 0 2.067 4.176l4.176-4.176H.413ZM19.305 2.48A11.957 11.957 0 0 0 15.13.412v6.243l4.175-4.175ZM4.693 21.518a11.957 11.957 0 0 0 4.176 2.067v-6.243l-4.176 4.176ZM8.869.412A11.957 11.957 0 0 0 4.693 2.48L8.87 6.655V.412Zm6.261 23.173a11.96 11.96 0 0 0 4.175-2.067l-4.175-4.176v6.243Zm2.214-8.455 4.175 4.176a11.957 11.957 0 0 0 2.067-4.176h-6.242Z"
              fill="#0052B4"
            />
            <path
              d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.12 12.12 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z"
              fill="#D80027"
            />
            <path
              d="m15.13 15.131 5.356 5.355c.246-.246.48-.503.705-.77l-4.584-4.585H15.13Zm-6.26 0-5.355 5.355c.246.246.503.481.77.705l4.585-4.584V15.13Zm0-6.261v-.001L3.515 3.514a12.03 12.03 0 0 0-.705.77L7.394 8.87H8.87Zm6.26 0 5.356-5.355a12.023 12.023 0 0 0-.77-.705L15.13 7.394V8.87Z"
              fill="#D80027"
            />
          </g>
          <defs>
            {/* <g clipPath="url(#GB_svg__a)">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </g> */}
          </defs>
        </svg>
      </MenuItem>
      <MenuItem value="kh">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g clipPath="url(#KH_svg__a)">
            <path
              d="M0 12c0 2.08.529 4.035 1.46 5.74L12 18.784l10.54-1.044A11.927 11.927 0 0 0 24 12c0-2.078-.529-4.033-1.46-5.738L12 5.218 1.46 6.262A11.946 11.946 0 0 0 0 12Z"
              fill="#D80027"
            />
            <path
              d="M1.459 6.261h21.082A11.997 11.997 0 0 0 12 .001 11.992 11.992 0 0 0 1.459 6.26ZM12 24c4.548 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 11.999 24Z"
              fill="#0052B4"
            />
            <path
              d="M16.174 14.347v-1.565h-1.043v-2.087l-1.043-1.043-1.044 1.043V8.608l-1.043-1.043-1.044 1.043v2.087L9.914 9.652 8.87 10.695v2.087H7.827v1.565H6.783v1.566h10.435v-1.566h-1.044Z"
              fill="#F0F0F0"
            />
          </g>
          <defs>
            {/* <clipPath id="KH_svg__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath> */}
          </defs>
        </svg>
      </MenuItem>
    </Select>
  );
};

export default LanguageSelectorMUI;

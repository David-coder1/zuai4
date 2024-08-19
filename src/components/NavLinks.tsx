"use client";
import React, { ReactElement } from "react";
import SideLinks from "./SideLinks";
import { usePathname } from "next/navigation";

export interface Icon {
  svgIcon: JSX.Element;
  id: number;
  path:string
}


// console.log(links)
export default function NavLinks() {
  const pathname  = usePathname()

  const links: Icon[] = [
    {
      svgIcon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.25 5.0915V1.40875C10.25 1.14775 10.3369 0.931083 10.5107 0.758749C10.6846 0.586249 10.8999 0.5 11.1568 0.5H16.5972C16.8542 0.5 17.0689 0.586249 17.2413 0.758749C17.4138 0.931083 17.5 1.14775 17.5 1.40875V5.0915C17.5 5.35233 17.4131 5.56892 17.2393 5.74125C17.0654 5.91375 16.8501 6 16.5933 6H11.1528C10.8958 6 10.6811 5.91375 10.5087 5.74125C10.3363 5.56892 10.25 5.35233 10.25 5.0915ZM0.5 8.6V1.39975C0.5 1.14475 0.586916 0.931083 0.76075 0.758749C0.934583 0.586249 1.14992 0.5 1.40675 0.5H6.84725C7.10425 0.5 7.31892 0.586249 7.49125 0.758749C7.66375 0.931249 7.75 1.145 7.75 1.4V8.60025C7.75 8.85525 7.66308 9.06892 7.48925 9.24125C7.31542 9.41375 7.10008 9.5 6.84325 9.5H1.40275C1.14575 9.5 0.931084 9.41375 0.75875 9.24125C0.58625 9.06875 0.5 8.855 0.5 8.6ZM10.25 16.6V9.39975C10.25 9.14475 10.3369 8.93108 10.5107 8.75875C10.6846 8.58625 10.8999 8.5 11.1568 8.5H16.5972C16.8542 8.5 17.0689 8.58625 17.2413 8.75875C17.4138 8.93125 17.5 9.145 17.5 9.4V16.6003C17.5 16.8552 17.4131 17.0689 17.2393 17.2413C17.0654 17.4138 16.8501 17.5 16.5933 17.5H11.1528C10.8958 17.5 10.6811 17.4138 10.5087 17.2413C10.3363 17.0688 10.25 16.855 10.25 16.6ZM0.5 16.5913V12.9085C0.5 12.6477 0.586916 12.4311 0.76075 12.2587C0.934583 12.0863 1.14992 12 1.40675 12H6.84725C7.10425 12 7.31892 12.0863 7.49125 12.2587C7.66375 12.4311 7.75 12.6477 7.75 12.9085V16.5913C7.75 16.8523 7.66308 17.0689 7.48925 17.2413C7.31542 17.4138 7.10008 17.5 6.84325 17.5H1.40275C1.14575 17.5 0.931084 17.4138 0.75875 17.2413C0.58625 17.0689 0.5 16.8523 0.5 16.5913ZM2 8H6.25V2H2V8ZM11.75 16H16V10H11.75V16ZM11.75 4.5H16V2H11.75V4.5ZM2 16H6.25V13.5H2V16Z"
            fill={`${pathname==="/" ?"white":"black"}`}
         
          />
        </svg>
      ),
      id: 1,
      path: "/",
    },
    {
      svgIcon: (
        <svg
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6923 17.5H6.30775C5.80258 17.5 5.375 17.325 5.025 16.975C4.675 16.625 4.5 16.1974 4.5 15.6923V2.30775C4.5 1.80258 4.675 1.375 5.025 1.025C5.375 0.675 5.80258 0.5 6.30775 0.5H12.502C12.743 0.5 12.9748 0.546833 13.1973 0.6405C13.4196 0.734 13.6128 0.862834 13.777 1.027L17.973 5.223C18.1372 5.38717 18.266 5.58042 18.3595 5.80275C18.4532 6.02525 18.5 6.257 18.5 6.498V15.6923C18.5 16.1974 18.325 16.625 17.975 16.975C17.625 17.325 17.1974 17.5 16.6923 17.5ZM17 6.5H13.7115C13.3718 6.5 13.085 6.383 12.851 6.149C12.617 5.915 12.5 5.62817 12.5 5.2885V2H6.30775C6.23075 2 6.16025 2.03208 6.09625 2.09625C6.03208 2.16025 6 2.23075 6 2.30775V15.6923C6 15.7692 6.03208 15.8398 6.09625 15.9038C6.16025 15.9679 6.23075 16 6.30775 16H16.6923C16.7693 16 16.8398 15.9679 16.9038 15.9038C16.9679 15.8398 17 15.7692 17 15.6923V6.5ZM2.30775 21.5C1.80258 21.5 1.375 21.325 1.025 20.975C0.675 20.625 0.5 20.1974 0.5 19.6923V7.25C0.5 7.03717 0.571833 6.859 0.7155 6.7155C0.859 6.57183 1.03717 6.5 1.25 6.5C1.46283 6.5 1.641 6.57183 1.7845 6.7155C1.92817 6.859 2 7.03717 2 7.25V19.6923C2 19.7693 2.03208 19.8398 2.09625 19.9038C2.16025 19.9679 2.23075 20 2.30775 20H11.75C11.9628 20 12.141 20.0718 12.2845 20.2155C12.4282 20.359 12.5 20.5372 12.5 20.75C12.5 20.9628 12.4282 21.141 12.2845 21.2845C12.141 21.4282 11.9628 21.5 11.75 21.5H2.30775Z"
            fill="#1C1B1F"
          />
        </svg>
      ),
      id: 2,
      path: "file",
    },
    {
      svgIcon: (
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.1155 19.5C2.389 19.5 1.77142 19.2457 1.26275 18.7372C0.75425 18.2286 0.5 17.611 0.5 16.8845V3.1155C0.5 2.389 0.75425 1.77142 1.26275 1.26275C1.77142 0.75425 2.389 0.5 3.1155 0.5H12C12.4972 0.5 12.9228 0.677 13.2768 1.031C13.6308 1.385 13.8077 1.81058 13.8077 2.30775V14C13.8077 14.4972 13.6308 14.9228 13.2768 15.2768C12.9228 15.6308 12.4972 15.8077 12 15.8077H3.1155C2.8065 15.8077 2.54333 15.9126 2.326 16.1223C2.10867 16.3321 2 16.5921 2 16.9023C2 17.2122 2.10867 17.4727 2.326 17.6838C2.54333 17.8946 2.8065 18 3.1155 18H15.6923C15.7821 18 15.8558 17.9712 15.9135 17.9135C15.9712 17.8558 16 17.7821 16 17.6923V3.25C16 3.0375 16.0719 2.85942 16.2158 2.71575C16.3596 2.57192 16.5378 2.5 16.7502 2.5C16.9629 2.5 17.141 2.57192 17.2845 2.71575C17.4282 2.85942 17.5 3.0375 17.5 3.25V17.6923C17.5 18.1894 17.323 18.615 16.969 18.969C16.615 19.323 16.1894 19.5 15.6923 19.5H3.1155ZM5.69225 14.3077H12C12.0898 14.3077 12.1636 14.2789 12.2212 14.2212C12.2789 14.1636 12.3077 14.0898 12.3077 14V2.30775C12.3077 2.21792 12.2789 2.14417 12.2212 2.0865C12.1636 2.02883 12.0898 2 12 2H5.69225V14.3077ZM4.19225 14.3077V2H3.1155C2.79933 2 2.53442 2.10867 2.32075 2.326C2.10692 2.54333 2 2.8065 2 3.1155V14.598C2.173 14.516 2.34983 14.4471 2.5305 14.3913C2.71117 14.3356 2.90617 14.3077 3.1155 14.3077H4.19225Z"
            fill="#1C1B1F"
          />
        </svg>
      ),
      id: 3,
      path:"material"
    },
    {
      svgIcon: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.75 12.7692C11.9948 12.7692 12.2086 12.6779 12.3913 12.4952C12.5739 12.3126 12.6652 12.0988 12.6652 11.8538C12.6652 11.6089 12.5739 11.3952 12.3913 11.2125C12.2086 11.0298 11.9948 10.9385 11.75 10.9385C11.5052 10.9385 11.2914 11.0298 11.1087 11.2125C10.9259 11.3952 10.8345 11.6089 10.8345 11.8538C10.8345 12.0988 10.9259 12.3126 11.1087 12.4952C11.2914 12.6779 11.5052 12.7692 11.75 12.7692ZM11.75 9.7615C11.9013 9.7615 12.0385 9.70767 12.1615 9.6C12.2845 9.49233 12.3595 9.35583 12.3865 9.1905C12.4198 8.95833 12.4938 8.75575 12.6085 8.58275C12.7233 8.40958 12.9384 8.17175 13.2538 7.86925C13.7153 7.42692 14.0293 7.05317 14.196 6.748C14.3627 6.443 14.446 6.08858 14.446 5.68475C14.446 4.97308 14.1947 4.38617 13.6923 3.924C13.1898 3.46183 12.5423 3.23075 11.75 3.23075C11.2385 3.23075 10.7706 3.34933 10.3463 3.5865C9.92175 3.82367 9.58258 4.16275 9.32875 4.60375C9.24808 4.73842 9.23975 4.87983 9.30375 5.028C9.36792 5.176 9.47758 5.28208 9.63275 5.34625C9.77758 5.41025 9.92308 5.41692 10.0693 5.36625C10.2154 5.31575 10.334 5.22317 10.425 5.0885C10.5878 4.84617 10.7788 4.66442 10.998 4.54325C11.2173 4.42208 11.468 4.3615 11.75 4.3615C12.1885 4.3615 12.5487 4.48842 12.8307 4.74225C13.1127 4.99608 13.2538 5.33075 13.2538 5.74625C13.2538 5.99875 13.1823 6.23558 13.0395 6.45675C12.8965 6.67792 12.6487 6.95 12.2962 7.273C11.8641 7.64483 11.5782 7.95125 11.4385 8.19225C11.2987 8.43325 11.2121 8.75767 11.1788 9.1655C11.1621 9.3205 11.2102 9.45858 11.323 9.57975C11.4358 9.70092 11.5782 9.7615 11.75 9.7615ZM6.05775 15.5C5.55258 15.5 5.125 15.325 4.775 14.975C4.425 14.625 4.25 14.1974 4.25 13.6923V2.30775C4.25 1.80258 4.425 1.375 4.775 1.025C5.125 0.675 5.55258 0.5 6.05775 0.5H17.4423C17.9474 0.5 18.375 0.675 18.725 1.025C19.075 1.375 19.25 1.80258 19.25 2.30775V13.6923C19.25 14.1974 19.075 14.625 18.725 14.975C18.375 15.325 17.9474 15.5 17.4423 15.5H6.05775ZM6.05775 14H17.4423C17.5193 14 17.5898 13.9679 17.6538 13.9038C17.7179 13.8398 17.75 13.7692 17.75 13.6923V2.30775C17.75 2.23075 17.7179 2.16025 17.6538 2.09625C17.5898 2.03208 17.5193 2 17.4423 2H6.05775C5.98075 2 5.91025 2.03208 5.84625 2.09625C5.78208 2.16025 5.75 2.23075 5.75 2.30775V13.6923C5.75 13.7692 5.78208 13.8398 5.84625 13.9038C5.91025 13.9679 5.98075 14 6.05775 14ZM2.55775 19C2.05258 19 1.625 18.825 1.275 18.475C0.925 18.125 0.75 17.6974 0.75 17.1923V5.05775C0.75 4.84492 0.821833 4.66667 0.9655 4.523C1.109 4.3795 1.28717 4.30775 1.5 4.30775C1.71283 4.30775 1.89108 4.3795 2.03475 4.523C2.17825 4.66667 2.25 4.84492 2.25 5.05775V17.1923C2.25 17.2693 2.28208 17.3398 2.34625 17.4038C2.41025 17.4679 2.48075 17.5 2.55775 17.5H14.6923C14.9051 17.5 15.0833 17.5718 15.227 17.7153C15.3705 17.8589 15.4423 18.0372 15.4423 18.25C15.4423 18.4628 15.3705 18.641 15.227 18.7845C15.0833 18.9282 14.9051 19 14.6923 19H2.55775Z"
            fill="#3D404B"
          />
        </svg>
      ),
      id: 4,
      path:"faq"
    },
  ];

  return (
    <div className="flex flex-col gap-y-5">
      {links.map((item) => (
        <SideLinks item={item} key={item.id} />
      ))}
    </div>
  );
}
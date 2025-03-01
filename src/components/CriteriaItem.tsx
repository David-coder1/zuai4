import { ProgressBar } from '@/app/evaluation/page';
import React from 'react'

interface criterion {
  title: string;
  heading: string;
  essay: string;
  criteria: number | undefined;
  strenghtText1: string;
  strenghtText2: string;
}

export default function CriteriaItem({item,curOpen,onOpen,num}:{item:criterion,num:number,curOpen:null,onOpen:any}) {
    const isOpen = num===curOpen
    const handleToggle = function(){
onOpen(isOpen?null:num)
    }
    const {essay,criteria,heading,title,strenghtText1,strenghtText2}=item
    console.log(item)
  return (
    <div className="my-6 p-2 rounded-3xl bg-white">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-x-2  items-center">
            <div>

          <ProgressBar score={criteria} total={10} />
            </div>
          <div className="flex flex-col gap-x-1">
            <h4 className="mb-0 text-sm text-primary700">{title}</h4>
            <h3 className="mb-0">{heading}</h3>
          </div>
        </div>

        <button onClick={handleToggle}>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.99952 2.45376L1.92652 6.52701C1.78802 6.66535 1.61394 6.73618 1.40427 6.73951C1.19477 6.74268 1.01752 6.67185 0.872524 6.52701C0.72769 6.38201 0.655273 6.20635 0.655273 6.00001C0.655273 5.79368 0.72769 5.61801 0.872524 5.47301L5.36677 0.978764C5.54761 0.798098 5.75852 0.707764 5.99952 0.707764C6.24052 0.707764 6.45144 0.798098 6.63227 0.978764L11.1265 5.47301C11.2649 5.61151 11.3357 5.7856 11.339 5.99526C11.3422 6.20476 11.2714 6.38201 11.1265 6.52701C10.9815 6.67185 10.8059 6.74426 10.5995 6.74426C10.3932 6.74426 10.2175 6.67185 10.0725 6.52701L5.99952 2.45376Z"
              fill="#3D404B"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={` `}>
            <div className='bg-primary500 my-4 w-full h-[1px]'></div>
          <p className="text-stone-400 text-sm my-4 ">{essay}</p>
          <h3>strength</h3>

          <div className=" border-green-500 rounded-2xl gap-y-2 border-2 p-2 flex flex-col">
            <path
              d="M7.83366 10.5L6.04199 8.70829C5.88921 8.55552 5.69477 8.47913 5.45866 8.47913C5.22255 8.47913 5.0281 8.55552 4.87533 8.70829C4.72255 8.86107 4.64616 9.05552 4.64616 9.29163C4.64616 9.52774 4.72255 9.72218 4.87533 9.87496L7.25033 12.25C7.41699 12.4166 7.61144 12.5 7.83366 12.5C8.05588 12.5 8.25033 12.4166 8.41699 12.25L13.1253 7.54163C13.2781 7.38885 13.3545 7.1944 13.3545 6.95829C13.3545 6.72218 13.2781 6.52774 13.1253 6.37496C12.9725 6.22218 12.7781 6.14579 12.542 6.14579C12.3059 6.14579 12.1114 6.22218 11.9587 6.37496L7.83366 10.5ZM9.00033 17.3333C7.84755 17.3333 6.76421 17.1145 5.75033 16.677C4.73644 16.2395 3.85449 15.6458 3.10449 14.8958C2.35449 14.1458 1.76074 13.2638 1.32324 12.25C0.885742 11.2361 0.666992 10.1527 0.666992 8.99996C0.666992 7.84718 0.885742 6.76385 1.32324 5.74996C1.76074 4.73607 2.35449 3.85413 3.10449 3.10413C3.85449 2.35413 4.73644 1.76038 5.75033 1.32288C6.76421 0.885376 7.84755 0.666626 9.00033 0.666626C10.1531 0.666626 11.2364 0.885376 12.2503 1.32288C13.2642 1.76038 14.1462 2.35413 14.8962 3.10413C15.6462 3.85413 16.2399 4.73607 16.6774 5.74996C17.1149 6.76385 17.3337 7.84718 17.3337 8.99996C17.3337 10.1527 17.1149 11.2361 16.6774 12.25C16.2399 13.2638 15.6462 14.1458 14.8962 14.8958C14.1462 15.6458 13.2642 16.2395 12.2503 16.677C11.2364 17.1145 10.1531 17.3333 9.00033 17.3333Z"
              fill="#3CC28A"
            />
            <span className="flex  gap-x-2">
              {" "}
              <svg
                width="40"
                height="40"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.83366 10.5L6.04199 8.70829C5.88921 8.55552 5.69477 8.47913 5.45866 8.47913C5.22255 8.47913 5.0281 8.55552 4.87533 8.70829C4.72255 8.86107 4.64616 9.05552 4.64616 9.29163C4.64616 9.52774 4.72255 9.72218 4.87533 9.87496L7.25033 12.25C7.41699 12.4166 7.61144 12.5 7.83366 12.5C8.05588 12.5 8.25033 12.4166 8.41699 12.25L13.1253 7.54163C13.2781 7.38885 13.3545 7.1944 13.3545 6.95829C13.3545 6.72218 13.2781 6.52774 13.1253 6.37496C12.9725 6.22218 12.7781 6.14579 12.542 6.14579C12.3059 6.14579 12.1114 6.22218 11.9587 6.37496L7.83366 10.5ZM9.00033 17.3333C7.84755 17.3333 6.76421 17.1145 5.75033 16.677C4.73644 16.2395 3.85449 15.6458 3.10449 14.8958C2.35449 14.1458 1.76074 13.2638 1.32324 12.25C0.885742 11.2361 0.666992 10.1527 0.666992 8.99996C0.666992 7.84718 0.885742 6.76385 1.32324 5.74996C1.76074 4.73607 2.35449 3.85413 3.10449 3.10413C3.85449 2.35413 4.73644 1.76038 5.75033 1.32288C6.76421 0.885376 7.84755 0.666626 9.00033 0.666626C10.1531 0.666626 11.2364 0.885376 12.2503 1.32288C13.2642 1.76038 14.1462 2.35413 14.8962 3.10413C15.6462 3.85413 16.2399 4.73607 16.6774 5.74996C17.1149 6.76385 17.3337 7.84718 17.3337 8.99996C17.3337 10.1527 17.1149 11.2361 16.6774 12.25C16.2399 13.2638 15.6462 14.1458 14.8962 14.8958C14.1462 15.6458 13.2642 16.2395 12.2503 16.677C11.2364 17.1145 10.1531 17.3333 9.00033 17.3333Z"
                  fill="#3CC28A"
                />
              </svg>
              {strenghtText1}
            </span>
            <span className="flex  gap-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.83366 10.5L6.04199 8.70829C5.88921 8.55552 5.69477 8.47913 5.45866 8.47913C5.22255 8.47913 5.0281 8.55552 4.87533 8.70829C4.72255 8.86107 4.64616 9.05552 4.64616 9.29163C4.64616 9.52774 4.72255 9.72218 4.87533 9.87496L7.25033 12.25C7.41699 12.4166 7.61144 12.5 7.83366 12.5C8.05588 12.5 8.25033 12.4166 8.41699 12.25L13.1253 7.54163C13.2781 7.38885 13.3545 7.1944 13.3545 6.95829C13.3545 6.72218 13.2781 6.52774 13.1253 6.37496C12.9725 6.22218 12.7781 6.14579 12.542 6.14579C12.3059 6.14579 12.1114 6.22218 11.9587 6.37496L7.83366 10.5ZM9.00033 17.3333C7.84755 17.3333 6.76421 17.1145 5.75033 16.677C4.73644 16.2395 3.85449 15.6458 3.10449 14.8958C2.35449 14.1458 1.76074 13.2638 1.32324 12.25C0.885742 11.2361 0.666992 10.1527 0.666992 8.99996C0.666992 7.84718 0.885742 6.76385 1.32324 5.74996C1.76074 4.73607 2.35449 3.85413 3.10449 3.10413C3.85449 2.35413 4.73644 1.76038 5.75033 1.32288C6.76421 0.885376 7.84755 0.666626 9.00033 0.666626C10.1531 0.666626 11.2364 0.885376 12.2503 1.32288C13.2642 1.76038 14.1462 2.35413 14.8962 3.10413C15.6462 3.85413 16.2399 4.73607 16.6774 5.74996C17.1149 6.76385 17.3337 7.84718 17.3337 8.99996C17.3337 10.1527 17.1149 11.2361 16.6774 12.25C16.2399 13.2638 15.6462 14.1458 14.8962 14.8958C14.1462 15.6458 13.2642 16.2395 12.2503 16.677C11.2364 17.1145 10.1531 17.3333 9.00033 17.3333Z"
                  fill="#3CC28A"
                />
              </svg>
              {strenghtText1}
            </span>
          </div>
          <h3 className="font-semibold my-4">scope of improvement</h3>
          <div className="border-2 border-[#F9C94E] rounded-2xl p-2">
            <p className="flex gap-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.335 0C3.73408 0 0 3.73408 0 8.335C0 12.9359 3.73408 16.67 8.335 16.67C12.9359 16.67 16.67 12.9359 16.67 8.335C16.67 3.73408 12.9359 0 8.335 0ZM9.1685 12.5025H7.5015V10.8355H9.1685V12.5025ZM9.1685 9.1685H7.5015V4.1675H9.1685V9.1685Z"
                  fill="#F9C94E"
                />
              </svg>
              {strenghtText1}
            </p>
            <p className="flex gap-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.335 0C3.73408 0 0 3.73408 0 8.335C0 12.9359 3.73408 16.67 8.335 16.67C12.9359 16.67 16.67 12.9359 16.67 8.335C16.67 3.73408 12.9359 0 8.335 0ZM9.1685 12.5025H7.5015V10.8355H9.1685V12.5025ZM9.1685 9.1685H7.5015V4.1675H9.1685V9.1685Z"
                  fill="#F9C94E"
                />
              </svg>
              {strenghtText1}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

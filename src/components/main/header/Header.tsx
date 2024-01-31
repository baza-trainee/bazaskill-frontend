'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../Container';
import Link from 'next/link';

const occupations = [
  'Design',
  'Front-end',
  'Back-end',
  'Full Stack',
  'QA Manual',
  'PM',
];

const Header = () => {
  const [checkedStates, setcheckedStates] = useState<
    boolean[]
  >(occupations.map(() => false));
  const [langOpen, setLangOpen] = useState(false);
  const toggleChecked = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setcheckedStates(newCheckedStates);
  };
  const handlelanguageClick = () => {
    setLangOpen((prev) => !prev);
  };
  return (
    <header>
      <div className="flex grow flex-row items-center justify-around bg-black">
        <Image
          src="/logo.svg"
          alt="baza trainee label"
          width={160}
          height={40}
        />
        <ul className="flex basis-1/2 justify-around hover:text-rose">
          {occupations.map((occupation, index) => (
            <li
              key={index}
              onClick={() => toggleChecked(index)}
              className="group flex cursor-pointer flex-row items-center text-white hover:text-rose">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="icon"
                viewBox="0 0 24 24"
                className="relative top-1 h-6 w-6 text-white transition-colors duration-300 group-hover:text-rose">
                <path
                  fill="currentColor"
                  d="M16.3738 15.2092L12.3469 11.1823C13.4953 9.86177 14.086 8.14694 13.9946 6.39932C13.9032 4.6517 13.1369 3.00783 11.8571 1.81423C10.5773 0.62063 8.88407 -0.0294494 7.13433 0.001025C5.38459 0.0314993 3.71503 0.740147 2.47759 1.97759C1.24015 3.21503 0.531499 4.88459 0.501025 6.63433C0.470551 8.38407 1.12063 10.0773 2.31423 11.3571C3.50783 12.6369 5.1517 13.4032 6.89932 13.4946C8.64694 13.586 10.3618 12.9953 11.6823 11.8469L15.7092 15.8738C15.7983 15.9569 15.9162 16.0021 16.0381 15.9999C16.1599 15.9978 16.2761 15.9484 16.3623 15.8623C16.4484 15.7761 16.4978 15.6599 16.4999 15.5381C16.5021 15.4162 16.4569 15.2983 16.3738 15.2092ZM1.46396 6.76362C1.46396 5.61656 1.8041 4.49525 2.44138 3.5415C3.07865 2.58775 3.98444 1.8444 5.04419 1.40543C6.10394 0.966471 7.27006 0.851618 8.39508 1.0754C9.5201 1.29918 10.5535 1.85154 11.3646 2.66264C12.1757 3.47374 12.7281 4.50714 12.9518 5.63216C13.1756 6.75719 13.0608 7.92331 12.6218 8.98306C12.1828 10.0428 11.4395 10.9486 10.4857 11.5859C9.53199 12.2231 8.41069 12.5633 7.26362 12.5633C5.72603 12.5614 4.25195 11.9498 3.1647 10.8625C2.07746 9.7753 1.46583 8.30122 1.46396 6.76362Z"
                />
              </svg>
              <span>{occupation}</span>
              {!checkedStates[index] ? (
                <svg
                  className="relative  top-2 ml-2 h-6 w-6 text-white transition-colors duration-300 group-hover:text-rose"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.14426 0.500001C0.645116 0.500001 0.298302 0.722103 0.10382 1.16631C-0.0906615 1.61051 -0.0119082 2.00435 0.340082 2.34783L3.22404 5.17391C3.33496 5.28261 3.45512 5.36413 3.58453 5.41848C3.71394 5.47283 3.85259 5.5 4.00048 5.5C4.14838 5.5 4.28703 5.47283 4.41644 5.41848C4.54585 5.36413 4.66601 5.28261 4.77693 5.17391L7.66089 2.34783C8.01214 2.00362 8.09052 1.60942 7.89604 1.16522C7.70156 0.721016 7.35511 0.499277 6.85671 0.500001H1.14426Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  className="relative top-2 ml-2 h-6 w-6 text-white transition-colors duration-300 group-hover:text-rose"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.85574 5.5C7.35488 5.5 7.7017 5.2779 7.89618 4.83369C8.09066 4.38949 8.01191 3.99565 7.65992 3.65217L4.77596 0.826087C4.66504 0.717391 4.54488 0.63587 4.41547 0.581523C4.28606 0.527175 4.14741 0.5 3.99952 0.5C3.85162 0.5 3.71297 0.527175 3.58356 0.581523C3.45415 0.63587 3.33399 0.717391 3.22307 0.826087L0.339114 3.65217C-0.0121365 3.99638 -0.0905209 4.39058 0.103961 4.83478C0.298443 5.27898 0.644887 5.50072 1.14329 5.5H6.85574Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>
        <div
          className="group flex cursor-pointer flex-row text-white hover:text-rose"
          onClick={handlelanguageClick}>
          Lang
          {!langOpen ? (
            <svg
              className="relative  top-2 ml-2 h-6 w-6 text-white transition-colors duration-300 group-hover:text-rose"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.14426 0.500001C0.645116 0.500001 0.298302 0.722103 0.10382 1.16631C-0.0906615 1.61051 -0.0119082 2.00435 0.340082 2.34783L3.22404 5.17391C3.33496 5.28261 3.45512 5.36413 3.58453 5.41848C3.71394 5.47283 3.85259 5.5 4.00048 5.5C4.14838 5.5 4.28703 5.47283 4.41644 5.41848C4.54585 5.36413 4.66601 5.28261 4.77693 5.17391L7.66089 2.34783C8.01214 2.00362 8.09052 1.60942 7.89604 1.16522C7.70156 0.721016 7.35511 0.499277 6.85671 0.500001H1.14426Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              className="relative top-2 ml-2 h-6 w-6 text-white transition-colors duration-300 group-hover:text-rose"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.85574 5.5C7.35488 5.5 7.7017 5.2779 7.89618 4.83369C8.09066 4.38949 8.01191 3.99565 7.65992 3.65217L4.77596 0.826087C4.66504 0.717391 4.54488 0.63587 4.41547 0.581523C4.28606 0.527175 4.14741 0.5 3.99952 0.5C3.85162 0.5 3.71297 0.527175 3.58356 0.581523C3.45415 0.63587 3.33399 0.717391 3.22307 0.826087L0.339114 3.65217C-0.0121365 3.99638 -0.0905209 4.39058 0.103961 4.83478C0.298443 5.27898 0.644887 5.50072 1.14329 5.5H6.85574Z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Input = () => {
  return (
    <div>
      <form className="flex border-spacing-0 outline-none">
        <div className="flex">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none">
              <path
                d="M7.99969 10C7.39739 10 6.81224 9.71875 6.39508 9.23001L0.308071 2.1038C-0.122797 1.59881 -0.0987961 0.807564 0.361787 0.336317C0.82237 -0.13243 1.54696 -0.107429 1.97669 0.396317L7.99969 7.44627L14.0227 0.396317C14.4524 -0.108679 15.1782 -0.13368 15.6376 0.336317C16.0982 0.807564 16.1233 1.59881 15.6925 2.1038L9.60545 9.23001C9.18715 9.71875 8.602 10 7.99969 10Z"
                fill="white"
              />
            </svg>
          </span>
          <input
            placeholder="Спеціальність"
            className="relative p-2 focus:border-transparent"
            type="text"
          />
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M20 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H11V20H8C7.73478 20 7.48043 20.1054 7.29289 20.2929C7.10536 20.4804 7 20.7348 7 21C7 21.2652 7.10536 21.5196 7.29289 21.7071C7.48043 21.8946 7.73478 22 8 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20H13V17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2ZM20 4V11H4V4H20ZM4 15V13H20V15H4Z"
                fill="currentCOlor"
              />
            </svg>
          </span>
        </div>
        <input placeholder='країна' type="text" />
        <button className="text-white">1111</button>
      </form>
    </div>
  );
};

export default Input;

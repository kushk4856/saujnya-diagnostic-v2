const AboutMissionCards = () => {
  return (
    <div className={`p-6  rounded-3xl  bg-primary  w-[300px]`}>
      <div className=" items-center justify-center flex-col flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
          >
            <g clipPath="url(#clip0_157_16847)">
              <path
                d="M78.7228 26.1499C77.0039 25.2053 74.3858 25.3953 72.6994 28.0464C72.6944 28.0544 72.6894 28.0624 72.6844 28.0705L66.415 38.3309C65.6599 37.8956 64.7938 37.7026 63.9128 37.7814C62.8083 37.8803 61.8146 38.3986 61.1149 39.2408C60.6674 39.7795 59.1889 41.6262 57.6238 43.5815C56.1372 45.4384 54.6002 47.3587 54.1711 47.8751C52.6833 49.6659 50.7855 51.0429 48.7763 52.5007C45.9257 54.5693 42.8082 56.8315 40.9582 60.5214C39.1083 56.8315 35.9909 54.5693 33.1401 52.5007C31.131 51.0428 29.2332 49.6658 27.7452 47.8751C27.3165 47.359 25.7807 45.4403 24.2954 43.5848C22.729 41.6281 21.2495 39.7797 20.8017 39.2408C20.1018 38.3986 19.1081 37.8803 18.0037 37.7814C17.1221 37.7026 16.2567 37.8959 15.5015 38.3309L9.23215 28.0705C9.22731 28.0624 9.22231 28.0544 9.21716 28.0464C7.53091 25.3956 4.91263 25.2049 3.19373 26.1499C1.15748 27.2694 0.397485 29.7677 1.42623 31.9611C1.42858 31.9661 1.43092 31.9709 1.43326 31.9759C1.87248 32.8872 2.94092 35.4366 4.17826 38.3887C5.90997 42.5203 8.06497 47.6623 9.89122 51.6793C12.2703 56.9126 13.3373 58.3832 17.5028 62.1693L23.1223 67.2773V67.7543H22.2084C21.3454 67.7543 20.6459 68.4538 20.6459 69.3168V78.6918C20.6459 79.5548 21.3454 80.2543 22.2084 80.2543H59.7083C60.5711 80.2543 61.2708 79.5548 61.2708 78.6918V69.3168C61.2708 68.4538 60.5711 67.7543 59.7083 67.7543H58.7944V67.2773L64.4141 62.1693C68.5794 58.3832 69.6464 56.9126 72.0256 51.6793C73.8517 47.6625 76.0067 42.5208 77.7383 38.3894C78.9758 35.4369 80.0445 32.8872 80.4836 31.9759C80.4859 31.9709 80.4883 31.9661 80.4906 31.9611C81.5195 29.7677 80.7595 27.2694 78.7228 26.1499ZM25.7359 65.4298L19.6048 59.8568C15.7673 56.3689 14.9328 55.2181 12.7362 50.3861C10.9292 46.4114 8.78419 41.2933 7.06044 37.1808C5.75826 34.0736 4.72888 31.6177 4.25248 30.6277C3.81592 29.6891 4.32732 29.0931 4.69935 28.8886C5.3231 28.5458 6.02325 28.8539 6.57404 29.7133L13.5428 41.1184C13.4148 41.9548 13.52 42.9937 14.0278 44.2773C15.486 47.9628 17.2939 51.644 18.9876 54.3771C19.4421 55.1107 20.4051 55.3367 21.1389 54.8821C21.8723 54.4276 22.0985 53.4645 21.644 52.7309C20.0437 50.1484 18.3268 46.6481 16.9337 43.1275C16.3382 41.6226 16.7337 41.2901 16.8826 41.165C17.1229 40.9631 17.4218 40.8676 17.7256 40.8942C17.9953 40.9183 18.2343 41.0406 18.3985 41.2383C18.8282 41.7553 20.3676 43.6783 21.8562 45.5381C23.419 47.4904 24.8951 49.3345 25.3421 49.8725C27.0807 51.9651 29.2284 53.5234 31.3052 55.0304C35.3305 57.9512 38.809 60.4754 39.3962 66.3374V67.7546H26.2474V66.5862C26.2474 66.1457 26.0617 65.726 25.7359 65.4298ZM23.771 70.8793H39.396V77.1293H23.771V70.8793ZM58.1458 77.1293H42.521V70.8793H58.1458V77.1293ZM77.6644 30.6275C77.1881 31.6177 76.1586 34.0739 74.8561 37.1814C73.1327 41.2936 70.9875 46.4115 69.1808 50.3859C66.9839 55.2181 66.1495 56.3687 62.3121 59.8567L56.181 65.4296C55.8552 65.7259 55.6696 66.1456 55.6696 66.5859V67.7543H42.5212V66.3363C43.1085 60.4748 46.5869 57.9507 50.6119 55.0301C52.6888 53.5231 54.8364 51.9648 56.575 49.8723C57.0224 49.3339 58.4996 47.4884 60.0638 45.5344C61.5513 43.6761 63.0892 41.7547 63.5186 41.238C63.6828 41.0403 63.9219 40.9181 64.1916 40.894C64.4945 40.8667 64.7942 40.963 65.0347 41.165C65.1834 41.2901 65.5789 41.6225 64.9836 43.1273C63.5905 46.6481 61.8736 50.1486 60.2733 52.7309C59.8188 53.4643 60.0449 54.4275 60.7783 54.8821C61.5119 55.3364 62.4749 55.1103 62.9296 54.377C64.6231 51.644 66.4308 47.9628 67.8894 44.2772C68.3972 42.9936 68.5022 41.9547 68.3742 41.1184L75.3434 29.7128C75.8941 28.8541 76.5941 28.5458 77.2178 28.8886C77.5897 29.0928 78.1011 29.6889 77.6644 30.6275Z"
                fill="#5E5EEE"
              ></path>
              <path
                d="M40.9584 29.1146C43.9486 29.1146 46.3814 26.6819 46.3814 23.6918C46.3814 20.7016 43.9488 18.2688 40.9584 18.2688C37.9681 18.2688 35.5356 20.7015 35.5356 23.6918C35.5356 26.6821 37.9681 29.1146 40.9584 29.1146ZM40.9584 21.3938C42.2255 21.3938 43.2564 22.4246 43.2564 23.6918C43.2564 24.9588 42.2255 25.9896 40.9584 25.9896C39.6914 25.9896 38.6606 24.9588 38.6606 23.6918C38.6606 22.4246 39.6914 21.3938 40.9584 21.3938Z"
                fill="#5E5EEE"
              ></path>
              <path
                d="M19.0835 25.2542H20.1524C20.9157 35.5158 29.1343 43.7343 39.3958 44.4976V45.5667C39.3958 46.4297 40.0953 47.1292 40.9583 47.1292C41.8213 47.1292 42.5208 46.4297 42.5208 45.5667V44.4976C52.7823 43.7343 61.0009 35.5158 61.7642 25.2542H62.8333C63.6961 25.2542 64.3957 24.5547 64.3957 23.6917C64.3957 22.8288 63.6961 22.1292 62.8333 22.1292H61.7642C61.0009 11.8677 52.7823 3.64911 42.5208 2.88583V1.81677C42.5208 0.953802 41.8211 0.254272 40.9583 0.254272C40.0953 0.254272 39.3958 0.953802 39.3958 1.81677V2.88567C29.1343 3.64911 20.9158 11.8675 20.1524 22.1292H19.0835C18.2205 22.1292 17.521 22.8288 17.521 23.6917C17.521 24.5547 18.2205 25.2542 19.0835 25.2542ZM23.2877 25.2542H27.9074C28.6214 31.2553 33.3949 36.0287 39.396 36.7426V41.3623C30.8585 40.6137 24.0363 33.7916 23.2877 25.2542ZM40.9585 13.6732C46.4827 13.6732 50.9769 18.1674 50.9769 23.6916C50.9769 29.2156 46.4827 33.71 40.9585 33.71C35.4342 33.71 30.9399 29.2158 30.9399 23.6917C30.9399 18.1675 35.4342 13.6732 40.9585 13.6732ZM42.5209 41.3623V36.7426C48.5219 36.0286 53.2953 31.2551 54.0094 25.2542H58.6292C57.8806 33.7916 51.0583 40.6137 42.5209 41.3623ZM58.6292 22.1292H54.0094C53.2953 16.1281 48.5219 11.3547 42.5209 10.6407V6.02098C51.0583 6.76957 57.8806 13.5917 58.6292 22.1292ZM39.396 6.02098V10.6407C33.3949 11.3547 28.6214 16.1281 27.9074 22.1292H23.2877C24.0363 13.5917 30.8585 6.76957 39.396 6.02098Z"
                fill="#0B0B38"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_157_16847">
                <rect
                  width="80"
                  height="80"
                  fill="white"
                  transform="translate(0.958496 0.254272)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        <h3>Our Mission</h3>
      </div>
    </div>
  );
};

export default AboutMissionCards;
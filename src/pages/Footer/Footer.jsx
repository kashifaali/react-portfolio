// import image from "../../assets/logo.png";
import "./Footer.css";
export default function Footer() {
    return (
      <footer className="footernav flex flex-col items-center pb-10">
        <p className="text-xl text-gray-700 font-bold font-[cursive]">Kashif Ali © 2025</p>
        <div className="black-logo my-4">
          {/* <img src=" alt="" /> */}
        </div>
        <ul class="mx-auto flex items-center justify-center gap-4 text-[#b0b2c3]">
        <li className="footer-link">
          <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
            <svg
              className="w-5 hover:text-[#6bc9e9] hover:w-5.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://twitter.com/anuragsinghbam" target="_blank">
            <svg
              className="w-5 hover:text-[#6bc9e9] hover:w-5.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="footer-link">
          <a href="https://www.instagram.com/procodrr/">
            <svg
              className="w-5 hover:text-[#6bc9e9] hover:w-5.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="footer-link">
          <a href="mailto:anuragsinghbam@gmail.com" target="_blank">
            <svg
              className="w-5 hover:text-[#6bc9e9] hover:w-5.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              ></path>
            </svg>
          </a>
        </li>
        <li className="footer-link">
  <a href="https://github.com/procodrr">
    <svg
      className="w-5 hover:text-[#6bc9e9] hover:w-5.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.89 1.523 2.335 1.083 2.902.829.09-.646.35-1.083.636-1.332-2.22-.252-4.555-1.11-4.555-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025a9.563 9.563 0 0 1 2.5-.336c.849.004 1.705.114 2.5.336 1.91-1.294 2.75-1.025 2.75-1.025.544 1.378.2 2.397.098 2.65.64.698 1.028 1.591 1.028 2.683 0 3.844-2.337 4.69-4.564 4.938.359.309.678.918.678 1.85 0 1.334-.012 2.412-.012 2.739 0 .268.18.578.688.48C19.135 20.164 22 16.416 22 12c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</li>

      </ul>

      </footer>
    );
  }
 
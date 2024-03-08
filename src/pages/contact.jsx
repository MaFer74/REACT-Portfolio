//components:
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";

function Contact() {
  return (
    <div>
      {/* form will go here */}


      <div>




        {/* CONTACT ICONS */}
        <a
          href="https://www.linkedin.com/in/maria-fernanda-lujan-39a4bb85/"
          target="_blank"
          className="btn btn-close-white"
          role="button"
        >
          <GrLinkedin size={42} />
        </a>
        {/* break line tag */}

        <a href="mailto:maferlusu@gmail.com">
          <HiOutlineMailOpen size={42} />
        </a>
      </div>
    </div>
  );
}
export default Contact;

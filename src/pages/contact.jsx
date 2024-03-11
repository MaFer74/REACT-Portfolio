//components:
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineMailOpen } from "react-icons/hi";


function Contact() {
  return (
    <div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

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

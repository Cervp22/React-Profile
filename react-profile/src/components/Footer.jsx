export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <a href="#">
            <img src="../images/github.png" alt="" className="githubimg" />
          </a>
          <a href="#">
            <img src="../images/linkedin.png" alt="" className="linkedinimg" />
          </a>
          <a href="#">
            {" "}
            <img
              src="../images/stackoverflow.png"
              alt=""
              className="stackoverflowimg"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

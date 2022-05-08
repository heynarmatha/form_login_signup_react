const Media =()=>{
  console.log("******************socialmedia******************");
    return(
        <div className="socialMedia">
        <div className=" icon facebook-icon">
          <span className="social-media-icon facebook">
            <i className="bx bxl-facebook"></i>
          </span>
        </div>
        <div className="icon twitter">
          <span className="social-media-icon twitter-icon">
            <i className="bx bxl-twitter"></i>
          </span>
        </div>
        <div className="icon google">
          <span className="social-media-icon google-icon">
            <i className="bx bxl-google"></i>
          </span>
        </div>
      </div>
    );
}

export default Media;
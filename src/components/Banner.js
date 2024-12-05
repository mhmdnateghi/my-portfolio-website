import React from "react";
import Profile from "../assets/img/profile.JPG";
import Twitter from "../assets/img/twitter-brands-solid.svg";
import AboutMe from "../assets/img/AboutMe.JPG";
import ExperienceIcon from "../assets/img/resume-icon1.png";
import EducationIcon from "../assets/img/resume-icon2.png";

const Banner = () => {
  return (
    <>
      {/*************** Banner ***************/}
      <section className="banner">
        <div className="banner-text">
          <h3>Hello, I'm</h3>
          <h1>
            Mohammad
            <br />
            Nateghi
          </h1>
          <h2>Web developer</h2>
          <a href="#HireMe" className="button">
            Hire Me
          </a>
        </div>

        <div className="banner-image">
          <img src={Profile} alt="profile" />

          <div className="social-group">
            <a href="#linkdin">
              <span>LinkedIn</span>
              <span>LinkedIn</span>
            </a>
            <a href="#instagram">
              <span>Instagram</span>
              <span>Instagram</span>
            </a>
            <a href="#telegram">
              <span>Telegram</span>
              <span>Telegram</span>
            </a>
            <a href="#twitter">
              <span className="social-icon">
                <img src={Twitter} alt="twitter" />
              </span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </section>
      {/*************** About me ***************/}
      <section className="about-me">
        <div className="title-shadow">
          <h2>about me</h2>
          <h4>about me</h4>
        </div>

        <div className="about-me-left">
          <img src={AboutMe} alt="AboutMe" />
        </div>

        <div className="about-me-right">
          <h2>Hi There! I'm Mohammad Nateghi</h2>
          <h4>Visual Designer</h4>
          <p>
            I am a Visual Designer with a strong focus on digital branding.
            Visul design seeks to attract, inspire, create desires and motivate
            people to respond to messages, with a view to making a favorable
            impact.
          </p>
          <ul>
            <li>
              <span>Birthday</span> : <span>&nbsp;&nbsp;July 13, 2000</span>
            </li>
            <li>
              <span>Phone</span> : <span>&nbsp;&nbsp;+98 919 7686 092</span>
            </li>
            <li>
              <span>Email</span> :{" "}
              <span>&nbsp;&nbsp;mo2.nateghi@gmail.com</span>
            </li>
            <li>
              <span>Address</span> :{" "}
              <span>&nbsp;&nbsp;33/1 Heravi Sonbol ALY.</span>
            </li>
            <li>
              <span>Language</span> : <span>&nbsp;&nbsp;English, Persian</span>
            </li>
            <li>
              <span>Freelance</span> : <span>&nbsp;&nbsp;Available</span>
            </li>
          </ul>
          <a href="#DownloadCV" className="button">
            Download CV
          </a>
        </div>
      </section>
      {/*************** Services ***************/}
      <section className="services">
        <div className="title-shadow">
          <h2>services</h2>
          <h4>services</h4>
        </div>

        <div className="card-container">
          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Excalidraw</title>
                <path d="M23.9428 19.8058a.1962.1962 0 0 0-.1679-.0337c-1.26-1.8552-2.8727-3.6104-4.4186-5.3152l-.2521-.284c-.0016-.0732-.0667-.1207-.1342-.1504-.0284-.0277-.0562-.0558-.0843-.0837-.0505-.1005-.1685-.1673-.2858-.1005-.4706.2347-.9068.5855-1.3274.9195-.5536.4345-1.1085.8695-1.6296 1.354a5.0577 5.0577 0 0 0-.5879.6185c-.0842.1168-.0168.2172.0843.2672-.3701.3677-.7402.736-1.109 1.1198a.1896.1896 0 0 0-.0506.1342c0 .05.0337.1.0668.1168l.6559.5012v.0169c.9237.9194 2.5538 2.1729 4.2844 3.5268.2515.201.5205.4014.7727.6017.1173.1342.2346.2847.3357.4182.0506.0662.1685.0837.2353.0331.0337.0337.0843.0668.118.1005a.2395.2395 0 0 0 .1004.0337.1534.1534 0 0 0 .1348-.0668.2371.2371 0 0 0 .0331-.1004c.0175 0 .0169.0168.0337.0168a.1915.1915 0 0 0 .1348-.0505l3.058-3.3265c.1198-.1159.0135-.2668-.0005-.2672zm-7.6277-.1336-1.5459-1.1704-.151-.0998c-.0337-.0169-.0674-.0506-.1011-.0668l-.1174-.1005c.6597-.659 1.3297-1.3074 1.9996-1.9557-.4874.4844-1.4622 1.9057-1.2606 2.3733.0023 0 .0186.0419.0674.0842.3704.311.7398.6232 1.109.9357zm4.0997 3.1261-1.277-.97a26.9056 26.9056 0 0 0-1.5795-1.5044c.689.5181 1.2769.9694 1.3611 1.053.6722.585.6379.485 1.0922.8696l.5542.4008c-.0735.103-.151.1477-.151.151zm.3357.2503-.0337-.0168c.0506-.0331.1011-.0668.1517-.1168zM.5885 3.4751c.0331.2172.0843.4344.1174.6354.2015 1.103.4031 2.1061.7726 2.8583l.1516.568c.0506.2173.1342.485.2185.5519.8568.7521 2.1674 1.8714 3.5785 2.9419a.1775.1775 0 0 0 .2185 0s0 .0162.0168.0162a.1528.1528 0 0 0 .118.0506.1912.1912 0 0 0 .1341-.0506c1.798-1.9887 3.1418-3.6267 4.0997-4.9974.0674-.0668.0843-.1673.0843-.251.0668-.0668.1173-.1504.1847-.2004.0668-.0668.0668-.184 0-.2346l-.0168-.0163c0-.033-.0169-.0836-.0506-.1005-.42-.4007-.722-.6848-1.0416-.9856A93.5546 93.5546 0 0 1 6.822 1.9876c-.0169-.0169-.0337-.0337-.0674-.0337-.3358-.1168-1.0248-.2341-1.8817-.3845C3.596 1.3527 1.865 1.0519.3027.583c0 0-.1011 0-.118.0169L.1348.6505C.0498.7139.0222.7058 0 .7167.017.8172.017.884.0506 1.0013c0 .0331.0673.3009.0673.334zm7.1909 4.7802-.0337.0337a.0362.0362 0 0 1 .0337-.0337zM6.553 2.238c.101.1005.5211.5019.6216.5855-.4369-.201-1.5284-.7022-2.0333-.8695.5043.1005 1.1933.201 1.4117.284ZM.7901 1.4027c.2521.4344.4537 1.9388.6553 3.4095-.118-.4682-.2016-.9357-.3027-1.3708C.9917 2.673.84 1.9876.6385 1.3858c.1232 0 .1516.0212.1516.0169zm-.2858-.3683c0-.0162 0-.033-.0169-.033.0843 0 .1342.0168.2016.0499.0006.0057-.1448-.0169-.1847-.0169zM23.6738.8172c.0169-.0662-.3358-.367-.2184-.3845.2527-.0163.2527-.4008 0-.4008-.3358.0169-.6884.0999-1.008.1504-.5878.1168-1.1926.2341-1.781.3671-1.327.2846-2.6375.5855-3.9481.937-.4032.1167-.857.2003-1.2432.4007-.1348.0668-.118.2004-.0506.284-.0337.0169-.0505.0169-.0842.0337-.1174.0169-.2185.0337-.3358.05-.1011.0168-.1516.1004-.1348.201 0 .0162.0169.0499.0169.0661-.7059.9363-1.4954 1.9226-2.3523 2.9757-.84.9694-1.7306 1.9893-2.6212 3.0424-2.8396 3.3096-6.0487 7.0705-9.5936 10.38a.1613.1613 0 0 0 0 .2341c.0169.0163.0337.0331.0506.0331-.0506.0506-.1011.0843-.1517.1336-.0337.0337-.0505.0668-.0505.1005a.364.364 0 0 0-.0668.0837c-.0674.0667-.0674.1835.0169.234.0667.0662.1847.0662.2346-.0168.0175-.0169.0175-.0337.0337-.0337a.2648.2648 0 0 1 .3701 0c.2016.2178.4032.435.588.6186l-.4201-.3508c-.0674-.0668-.1847-.05-.2347.0168-.068.0662-.0511.1835.0163.234l4.4691 3.7273c.0337.0337.0674.0337.118.0337.0505 0 .0842-.0169.1173-.0506l.101-.0999c.017.0163.05.0163.0669.0163.0505 0 .0842-.0163.118-.05 6.0486-6.0505 10.9216-10.6141 16.4997-14.6927.05-.0331.0668-.1.0668-.1505.0674 0 .118-.05.151-.1167 1.0254-3.1255 1.227-5.9007 1.2938-7.2709 0-.0579.0169-.0371.0169-.0668.0168-.0337.0168-.0505.0168-.0505a.9784.9784 0 0 0-.0668-.6186zm-10.82 4.9144c.2684-.3008.5374-.6186.8064-.9026-1.7306 2.2734-4.6033 5.7665-8.67 9.9288C7.7626 11.699 10.5517 8.54 12.854 5.7316ZM5.1414 23.4662c-.0162-.0168-.0162-.0168 0-.0168zm2.5033-2.156c.1348-.1505.2695-.284.4206-.4345 0 0 0 .0163.0168.0163-.2236.1978-.4334.4182-.4374.4182zm.6896-.6686c.0994-.0993.14-.1724.2852-.3177.9917-1.0193 2.0164-2.0393 3.058-3.0755l.0169-.0168c.2521-.2004.5542-.4177.8232-.6186a228.0627 228.0627 0 0 0-4.1833 4.0286zm6.5187-16.732c-.5543.719-1.1759 1.6716-1.697 2.4238-1.6463 2.3733-6.9393 8.1735-7.0566 8.274A1189.6473 1189.6473 0 0 1 1.26 19.204l-.1005.1005c-.0843-.1005-.0843-.251.0168-.3346 7.476-7.0037 12.0132-12.837 13.845-15.3944-.0506.1167-.0843.2166-.1685.334zm2.9064 3.4269c-.6716-.3851-.9905-.9869-.8064-1.5712l.0506-.201a.7753.7753 0 0 1 .0842-.1666c.1848-.301.4538-.5518.7564-.7023.0163 0 .0331 0 .05-.0168-.0169-.0337-.0169-.0837-.0169-.1336.0169-.1005.0843-.1673.2016-.1673.2016 0 .8238.1841 1.059.3845.0669.05.1343.1168.2017.1836.0842.1004.2184.2677.2852.4013.0337.0169.0674.1841.118.2678.0336.1336.0667.284.0505.4176-.0169.0169 0 .1167-.0169.1167a1.6055 1.6055 0 0 1-.2184.6186c-.0307.0307.0064.0119-.0505.0668-.0843.1342-.2016.251-.319.3346-.3869.2672-.8238.3508-1.2606.234-.1105-.0473-.1672-.0667-.1685-.0667zm4.3692 1.4039c0 .0168-.0168.0499 0 .0667-.0337 0-.0505.0169-.0842.0337-1.3274.9689-2.6212 1.9888-3.915 3.0256 1.109-.9868 2.218-1.9894 3.3776-2.9756.3358-.3009.5711-.6854.6379-1.1199l.1685-1.003v-.0332c.0842-.201.4032-.1173.3526.1-.0042-.0012-.1731.795-.5374 1.9057z" />
              </svg>
            </div>
            <h2 className="services-title">Sketches</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>

          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Flux</title>
                <path d="M11.402 23.747c.154.075.306.154.454.238.181.038.37.004.525-.097l.386-.251c-1.242-.831-2.622-1.251-3.998-1.602l2.633 1.712Zm-7.495-5.783a8.088 8.088 0 0 1-.222-.236.696.696 0 0 0 .112 1.075l2.304 1.498c1.019.422 2.085.686 3.134.944 1.636.403 3.2.79 4.554 1.728l.697-.453c-1.541-1.158-3.327-1.602-5.065-2.03-2.039-.503-3.965-.977-5.514-2.526Zm1.414-1.322-.665.432c.023.024.044.049.068.073 1.702 1.702 3.825 2.225 5.877 2.731 1.778.438 3.469.856 4.9 1.982l.682-.444c-1.612-1.357-3.532-1.834-5.395-2.293-2.019-.497-3.926-.969-5.467-2.481Zm7.502 2.084c1.596.412 3.096.904 4.367 2.036l.67-.436c-1.484-1.396-3.266-1.953-5.037-2.403v.803Zm.698-2.337a64.695 64.695 0 0 1-.698-.174v.802l.512.127c2.039.503 3.965.978 5.514 2.526l.007.009.663-.431c-.041-.042-.079-.086-.121-.128-1.702-1.701-3.824-2.225-5.877-2.731Zm-.698-1.928v.816c.624.19 1.255.347 1.879.501 2.039.502 3.965.977 5.513 2.526.077.077.153.157.226.239a.704.704 0 0 0-.238-.911l-3.064-1.992c-.744-.245-1.502-.433-2.251-.618a31.436 31.436 0 0 1-2.065-.561Zm-1.646 3.049c-1.526-.4-2.96-.888-4.185-1.955l-.674.439c1.439 1.326 3.151 1.88 4.859 2.319v-.803Zm0-1.772a8.543 8.543 0 0 1-2.492-1.283l-.686.446c.975.804 2.061 1.293 3.178 1.655v-.818Zm0-1.946a7.59 7.59 0 0 1-.776-.453l-.701.456c.462.337.957.627 1.477.865v-.868Zm3.533.269-1.887-1.226v.581c.614.257 1.244.473 1.887.645Zm5.493-8.863L12.381.112a.705.705 0 0 0-.762 0L3.797 5.198a.698.698 0 0 0 0 1.171l7.38 4.797V7.678a.414.414 0 0 0-.412-.412h-.543a.413.413 0 0 1-.356-.617l1.777-3.079a.412.412 0 0 1 .714 0l1.777 3.079a.413.413 0 0 1-.356.617h-.543a.414.414 0 0 0-.412.412v3.488l7.38-4.797a.7.7 0 0 0 0-1.171Z" />
              </svg>
            </div>
            <h2 className="services-title">UI/UX Design</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>

          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>VirtualBox</title>
                <path d="M12 0a.477.477 0 0 0-.188.047L2.17 4.274c-.265.169-.378.363-.372.692l.832 10.278c.009.107.047.165.128.25l3.564 2.713s.015 2.015.455 2.806C7.109 21.61 8.652 24.033 12 24c3.348-.033 4.988-2.03 5.484-3.028.47-.946.46-2.912.46-2.912l3.255-2.548a.31.31 0 0 0 .14-.258l.86-10.31c.026-.312-.103-.57-.368-.685L12.181.047A.435.435 0 0 0 12 0zm-.051 1.078c.054.002.108.02.188.056l7.417 3.429L12.132 8.9c-.115.058-.166.049-.264 0l-7.35-4.264c-.113-.074-.12-.125 0-.197l7.234-3.314a.534.534 0 0 1 .197-.047zm.01.688L5.905 4.591l6.042 3.49 6.067-3.48zm0 .375l5.232 2.46-3.262 1.82-1.04-.557 1.764-2.208-2.138.838L13.639 3.1l-3.252 1.346 1.1-1.15-.978-.45zm-1.837.849l.784.388-2.115 2.098 3.615-1.492-1.246 1.502 2.237-.932-1.136 1.419 1.232.666-1.56.885-5.148-2.946zm-6.93 3.902c.029 0 .072.02.135.054l7.28 4.577.017 7.818-6.853-5.057c-.077-.073-.104-.098-.103-.193l-.52-7.137c0-.043.015-.062.044-.062zm17.592.086c.03 0 .042.02.043.062l-.495 7.027c0 .096-.026.12-.103.193l-6.843 5.081.043-7.805 7.219-4.504a.348.348 0 0 1 .136-.054zm-.805 3.206l-.177.126-.133.442-.049-.315-.226.15.145.598-.224.915.233-.195.085-.527.064.413.278-.184-.195-.682zm-15.71.249c-.12-.011-.19.127-.169.37.028.327.21.72.408.877l.419.33c.2.158.338.018.307-.313-.03-.33-.216-.724-.414-.879l-.417-.323a.265.265 0 0 0-.134-.062zm.075.235a.173.173 0 0 1 .087.041l.397.31c.129.101.25.358.27.57.02.215-.07.304-.199.202l-.4-.315c-.128-.101-.246-.354-.264-.566-.014-.158.03-.249.109-.242zm14.823.103c0-.035-.074.01-.115.04-.16.123-.358.559-.372 1.068-.015.556.11.619.263.514.162-.11.382-.492.39-1.026.007-.409-.166-.491-.166-.596zm-.713.067s-.439.19-.44.295c-.01.65-.07 1.968-.07 1.968l.332-.251s.329-.218.334-.82c.003-.386-.126-.31-.126-.31s.104-.218.106-.514c.005-.445-.136-.368-.136-.368zm.602.214c.115 0 .094.268.092.446-.002.175-.088.576-.18.643-.093.068-.1-.243-.098-.423.003-.173.074-.666.186-.666zm-.72.075s.08-.05.073.214a.829.829 0 0 1-.088.328l-.134.09.006-.538zm-.512.021l-.229.14-.06 1.843s-.014.184.036.222c.072.056.267-.173.267-.173l-.004-.21s-.075.018-.072-.058zM5.25 11.16l.112 1.196.14.111-.091-.988.461.363a.47.47 0 0 1 .137.287c.01.108-.033.154-.098.103l-.396-.313.477.936.205.163-.32-.617.063.05c.137.107.23.013.208-.213-.022-.225-.15-.496-.287-.602zm13.049.78s.1-.024.09.279c-.008.257-.09.338-.09.338l-.152.11.013-.62zm-.95.174c-.042-.012-.102.006-.189.077-.107.07-.305.38-.305.38l.008.19s.114-.141.171-.187c.221-.22.165.09.165.09l-.005.099-.156.146s-.231.227-.243.658c-.006.206.068.35.18.265.11-.082.247-.33.247-.33l.004.144.19-.17.013-1.02s.043-.307-.08-.342zm-10.704.126c-.035-.028-.066-.027-.08.004l-.334.8.167.133.273-.671.254.69-.38-.3.105.28.386.307.103.28.17.134-.572-1.518a.338.338 0 0 0-.092-.139zm10.054.35l-.18.132-.01 1.078s-.098.19-.14.217c-.072.047-.07-.107-.07-.107l.015-1.02-.192.145-.015 1.02s-.011.457.182.313a.779.779 0 0 0 .222-.323l.017.128.154-.11zm-.806.11l-.164.108-.066.489-.077.049v.023l-.152.095c-.06.093-.098.38-.098.38l.002-.288-.175.124-.04 1.483.198-.143.043-.877s.032-.211.098-.321l.107-.086.017-.309.002.155.066-.056-.008.945s-.015.314.15.204c.057-.039.213-.23.213-.23L16 14.252s-.076.071-.1.086c-.037.023-.036-.058-.036-.058l.021-.915.11-.077-.003-.24-.096.06zm-8.551.14c-.124-.012-.197.13-.171.384.035.339.232.748.44.913l.449.353.062-.15-.524-.415c-.134-.107-.263-.37-.286-.59-.023-.219.07-.31.203-.206l.423.333.062-.15-.517-.408a.28.28 0 0 0-.141-.064zm9.85.172v.357s-.107.126-.156.155c-.048.029-.06-.055-.06-.129a.457.457 0 0 1 .118-.293zm-2.226.171c-.067.048-.123.188-.124.313 0 .125.053.187.12.14.068-.048.125-.188.126-.314 0-.125-.054-.188-.122-.139zm-6.887.189l.12 1.12a.296.296 0 0 0 .087.178l.673.532.062-.152-.686-.543-.11-1.022zm6.684.109l-.213.156s-.022.371-.182 1.69c-.132-.98-.132-1.45-.132-1.45l-.246.163.152 1.803.365-.208zm.259.298l-.197.141-.062 1.505.197-.142zm-5.911.446c-.127-.013-.198.133-.169.392.039.346.244.765.457.934l.46.364.064-.154-.541-.426c-.114-.09-.225-.29-.273-.485l.636.5.062-.153-.724-.57c.01-.146.094-.196.207-.107l.436.343.062-.152-.534-.418a.292.292 0 0 0-.143-.068zm.769.587c-.013.013-.02.042-.015.081a.351.351 0 0 0 .105.21c.048.038.08.006.07-.073a.36.36 0 0 0-.105-.212c-.024-.018-.042-.02-.055-.006zm.015.032c.01-.01.026-.01.045.004.038.03.074.104.08.165.008.063-.016.088-.055.058-.012-.01-.015-.035-.025-.051l.006.004-.006-.06.015.01.025.078.022.017-.03-.084h.004c.008-.002.009-.013.008-.019v-.013a.122.122 0 0 0-.025-.058.12.12 0 0 0-.026-.025l-.023-.02.015.137c-.015-.03-.037-.05-.04-.08-.005-.032 0-.053.01-.063zm.036.047l.006.004c.01.008.013.011.018.017a.07.07 0 0 1 .01.026c0 .006.002.01 0 .013-.002.006-.009.002-.015-.002l-.013-.01z" />
              </svg>
            </div>
            <h2 className="services-title">Product Design</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>

          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Affinity Designer</title>
                <path d="M24 2.344v19.312A2.345 2.345 0 0 1 21.656 24H2.344A2.345 2.345 0 0 1 0 21.656V2.344A2.345 2.345 0 0 1 2.344 0h19.312A2.345 2.345 0 0 1 24 2.344ZM1.758 21.305c0 .517.42.937.938.937h8.226l-4.299-7.445 7.528-13.039h-3.482L1.758 17.192v4.113Zm11.418-6.866-2.712-4.698-1.761 3.051a1.098 1.098 0 0 0 .952 1.647h3.521Zm9.066 6.873v-6.075H7.799l4.044 7.005h9.462a.937.937 0 0 0 .937-.93Zm-.937-19.554h-6.232l-4.148 7.185 3.173 5.496h8.144V2.688a.937.937 0 0 0-.937-.93Z" />
              </svg>
            </div>
            <h2 className="services-title">App Design</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>

          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>ActiGraph</title>
                <path d="M12.043 0c.413 0 .83.266 1.054.546.224.28.191.342.21.529.018.187.16.265.16.62s-.16.494-.272.644c-.112.15-.047.2-.14.406-.094.206-.118.168-.193.336-.075.168.123.462.319.61.196.147.378.262.938.318.56.056.683.03.963.05.28.018.453.174.882.23.43.056.449 0 .803 0 .355 0 .462.053.78.053.317 0 .75-.14 1.141-.122.393.018 1.43.115 1.86.115.43 0 .931-.442 1.38-.423.448.018.832.119.85.455.019.336-.165.762-.37.837-.206.074-.609-.067-.852-.067-.242 0-.496.03-.606.025-.133-.007-.232-.09-.381-.053-.15.038-.76.297-.984.315-.224.02-.689-.034-.875.003-.187.038-.822.15-1.083.168-.262.02-.786-.02-1.029.018-.243.037-.615.113-.839.113-.224 0-.702-.172-.866-.054-.397.288-.336.683-.532 1.247-.187.538-.488.88-.525 1.29-.038.412.224 1.738.355 2.205.13.467.504 1.083.747 1.848.242.766.58 2.31.711 2.945.131.635.004.62.11.977.108.362.616.934.878 1.83.261.896.547 2.744.64 3.23.094.485.135.558.172.707.037.15-.045.214.039.35.378.613.848.849.792 1.222-.056.374-.652.513-1.083.448-.326-.048-.523-.672-.597-.859-.075-.186.003-.239-.072-.37-.075-.13-.089-.199-.126-.535-.037-.336.016-.36-.039-.582-.294-1.197-1.144-2.367-1.35-3.07-.117-.393-.049-.444-.124-.799-.074-.355-2.402-5.42-2.883-5.42-.496 0-2.783 5.006-2.877 5.323-.093.318-.04.638-.133.899s-1.208 2.388-1.36 3.042c-.1.428-.012.556-.068.8-.056.242-.266 1.303-.659 1.509-.392.205-1.086.046-1.178-.292-.142-.52.678-.906.765-1.382.076-.41.804-4.165 1.102-4.893.299-.728.486-.654.616-1.064.042-.13.043-.514.113-.945.153-.934.433-2.294.765-3.201.486-1.326 1.157-2.611 1.032-3.893-.053-.539-.23-.606-.417-1.222-.187-.616-.428-1.347-.67-1.384-.244-.037-.449.093-.748.093s-.896-.13-1.12-.13c-.224 0-.992-.05-1.31-.05-.318 0-.54-.081-.726-.063-.187.02-.36.007-.584.007-.28 0-1.017-.34-1.204-.34-.187 0-.245.036-.413.036-.168 0-.325-.063-.512-.063-.186 0-.532.108-.71.108-.186 0-.54-.419-.484-.886.056-.466.805-.42.991-.42.263 0 .889.355 1.131.392.243.038 1.538-.101 1.818-.101s1.08.126 1.509.126c.43 0 1.014.01 1.369-.046s.68-.244.903-.262c.224-.019 1.238.091 1.807-.306.375-.261.411-.486.392-.654-.018-.168-.14-.192-.234-.36-.094-.168-.053-.305-.109-.417-.056-.112-.269-.212-.273-.623-.004-.322.035-.278.147-.596.112-.317.116-.451.378-.707.19-.184.575-.371.988-.371" />
              </svg>
            </div>
            <h2 className="services-title">Motion Graphics</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>

          <div className="services-card">
            <div className="services-icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Elementor</title>
                <path d="M12 0C5.372 0 0 5.372 0 12c0 6.626 5.372 12 12 12s12-5.372 12-12c0-6.626-5.372-12-12-12ZM9 17H7V7H9Zm8 0H11V15h6Zm0-4H11V11h6Zm0-4H11V7h6Z" />
              </svg>
            </div>
            <h2 className="services-title">Responsive Design</h2>
            <div className="services-text">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor
              sittem elit inuning utsed sittem.
            </div>
          </div>
        </div>
      </section>
      {/*************** Skills ***************/}
      <section className="skills">
        <div className="title-shadow">
          <h2>my skills</h2>
          <h4>my skills</h4>
        </div>

        <div className="skills-container">
          <div className="skills-left">
            <h2>
              All the skills that I have in that field of work are mentioned.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores.
            </p>
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt.
            </p>
          </div>

          <Skills />
        </div>
      </section>
      {/*************** Resume ***************/}
      <section className="resume">
        <div className="title-shadow">
          <h2>resume</h2>
          <h4>resume</h4>
        </div>

        <div className="resume-container">
          <div className="experience">
            <div className="resume-heading">
              <img src={ExperienceIcon} alt="Experience Icon" />
              <h2>Experience</h2>
            </div>
            <div className="resume-height"></div>
            <div className="timeline">
              <div className="resume-timeline">
                <h3 className="timeline-title">Senior UX/UI Designer</h3>
                <div className="timeline-duration">Jan 2020 - Present</div>
                <h4 className="timeline-location">Bergnaum, Hills and Howe</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
              <div className="resume-height"></div>
              <div className="resume-timeline">
                <h3 className="timeline-title">Product Designer</h3>
                <div className="timeline-duration">Jan 2016 - July 2019</div>
                <h4 className="timeline-location">Langosh, Sipes and Raynor</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
              <div className="resume-height"></div>
              <div className="resume-timeline">
                <h3 className="timeline-title">UI/UX Designer</h3>
                <div className="timeline-duration">Jan 2014 - July 2015</div>
                <h4 className="timeline-location">Stros, Maggio and Homen</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education">
            <div className="resume-heading">
              <img src={EducationIcon} alt="Education Icon" />
              <h2>Education</h2>
            </div>
            <div className="resume-height"></div>
            <div className="timeline">
              <div className="resume-timeline">
                <h3 className="timeline-title">Master of Computer Science</h3>
                <div className="timeline-duration">2015 - 2016</div>
                <h4 className="timeline-location">University of XYZ</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
              <div className="resume-height"></div>
              <div className="resume-timeline">
                <h3 className="timeline-title">Bachelor of Computer Science</h3>
                <div className="timeline-duration">2010 - 2014</div>
                <h4 className="timeline-location">University of ABC</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
              <div className="resume-height"></div>
              <div className="resume-timeline">
                <h3 className="timeline-title">Diploma in Computer Science</h3>
                <div className="timeline-duration">2006 - 2010</div>
                <h4 className="timeline-location">XYZ Institution</h4>
                <div className="timeline-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ligula nulla, tincidunt id faucibus sed, suscipit
                    feugiat turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*************** portfolios ***************/}
      <section className="portfolios">
        <div className="title-shadow">
          <h2>portfolios</h2>
          <h4>portfolios</h4>
        </div>
      </section>
    </>
  );
};

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "60%" },
    { name: "React", level: "80%" },
    { name: "Bootstrap", level: "40%" },
    { name: "Figma", level: "50%" },
  ];

  return (
    <div className="skills-right">
      {skillsData.map((skill, index) => (
        <div className="progress" key={index}>
          <div className="progress-heading">
            <h3>{skill.name}</h3>
            <div className="progress-percentage">{skill.level}</div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: skill.level }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

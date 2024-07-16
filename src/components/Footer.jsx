import styles from "../style";
import { logo, github, leetcode } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-10`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 flex-1 w-full mt-10`}>
      {/* <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div> */}

      <div className="flex-1 w-full flex flex-row justify-center items-center flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins text-[40px] sm:leading-[27px] text-white font-bold">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4 flex flex-row justify-between items-center">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link}> <img src={link.image} alt={link.name} className={`h-[50px] w-[50px] 
                  }`}/>
                  {link.name}</a>
                  
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    
  </section>
);

export default Footer;
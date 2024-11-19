import "../../assets/css/footer.css";
import Section from "../common/Section";

function FooterCopyright() {
  return (
    <Section className="copyright-wrapper bg-gradient-to-r from-[#D2122E] to-[#ff4f5e] w-full py-2">
      <div className="copyright-content mx-auto mx-o max-w-custom flex justify-center text-center flex-col">
        <h1 className="text-white text-[14px] max-sm:text-xs">
          Copyright ©2024 All rights reserved | Powered by Manna Tech Solutions
        </h1>
      </div>
    </Section>
  );
}

export default FooterCopyright;

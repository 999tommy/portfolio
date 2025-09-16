// footer.jsx
import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';
import twitterIcon from '../assets/icons-white/twitter-ico.png';
import youtubeIcon from '../assets/icons-white/yt-ico.png';

const Footer = () => {
  return (
    <div className="bg-terminal-black border-t border-cyan/20 px-7 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* logo and description */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-cyan font-bold text-lg tracking-wide font-mono">
            adegboye@portfolio:~$
          </h4>
        </div>
        {/* social icons as commands */}
        <div className='flex gap-4'>
          <a href="https://www.linkedin.com/in/adegboye-tommy-125098254" className='text-cyan hover:text-green transition-colors'><img src={linkedinIcon} alt="" className='w-5 h-5'/></a>
          <a href="https://github.com/999tommy" className='text-cyan hover:text-green transition-colors'><img src={githubIcon} alt="" className='w-5 h-5'/></a>
          <a href="" className='text-cyan hover:text-green transition-colors'><img src={twitterIcon} alt="" className='w-5 h-5'/></a>
        </div>
      </div>

      <hr className='border-gray-700 my-4'/>

      {/* copyright text */}
      <div className="text-center">
        <p className='text-xs text-gray-400 font-mono'>© 2025 Tommy Adegboye | Built with React & Tailwind</p>
      </div>
    </div>
  );
};

export default Footer;
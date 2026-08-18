import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon, LinkedinLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"

 
 
 
 function Footer() {
   return (
    <footer className="bg-slate-900 border-t border-slate-400 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 py-8 gap-4 max-w-7xl mx-auto">
        <div  className="text-sm text-slate-400 font-semibold">
           © 2026
           
           <p>Esta empresa e todas as informações são fictícias e criadas exclusivamente para fins educacionais.
          </p>
        </div>
        
         <nav className="flex gap-4">
          <a
            className="text-slate-600 hover:text-blue-700 transition-all"
            href="#"
            title="Facebook"
            aria-label="Facebook"
          >
            <FacebookLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-slate-600 hover:text-blue-700 transition-all"
            href="#"
            title="Instagram"
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-slate-600 hover:text-blue-700 transition-all"
            href="#"
            title="Twitter"
            aria-label="Twitter"
          >
            <XLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-slate-600 hover:text-blue-700 transition-all"
            href="#"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinLogoIcon size={22} weight="fill" />
          </a>
          <a
            className="text-slate-600 hover:text-blue-700 transition-all"
            href="#"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <YoutubeLogoIcon size={22} weight="fill" />
          </a>
        </nav>
      </div>

    </footer>
   )
 }
 
 export default Footer
 
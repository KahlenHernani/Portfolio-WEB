import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export const ContactSection = () => {
    return (<footer id="contact" className="bg-primary relative min-h-[100px] flex justify-between items-start px-4 py-12 border-t border-border mt-12">
            {/* Top Left */}
            <div> 
            <p className="text-6xl font-bold text-primary-foreground text-left"> 
                Contact
            </p>
            <div className="text-3xl font-bold text-left space-y-4 mt-8">
            <p>
                <MailIcon className="inline mr-2" />
                : Kahlenhernani@gmail.com
            </p>
            <p>
                <PhoneIcon className="inline mr-2" />
                : 909-672-0292
            </p>
            <p>
                <LinkedinIcon className="inline mr-2" />
                : linkedin.com/in/kahlen-hernani
            </p>
            <p>
                <GithubIcon className="inline mr-2" />
                : github.com/kahlenhernani
            </p>
            </div>
            </div>
            {/* Center */}
            <img src='./public/llama.png' className="w-80 h-80"/>
            {/* Bottom Right */}
            <div>
            <p className="text-sm text-primary-foreground text-muted-foreground mt-85">
                &copy; {new Date().getFullYear()} All rights reserved <span className="text-bold text-background">TOO ME.</span>
            </p>
            </div>
        </footer>);
}
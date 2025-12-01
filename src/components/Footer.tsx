import { SiGithub } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">JustMate</h3>
                        <p className="text-gray-500 text-sm">
                            Construindo o futuro, uma linha de código por vez.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <a href="mailto:justmatedev@gmail.com" className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                            <HiMail className="text-xl" />
                            justmatedev@gmail.com
                        </a>

                        <div className="flex items-center gap-6">
                            <a href="https://github.com/justmatedev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                                <SiGithub size={24} />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} JustMate. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

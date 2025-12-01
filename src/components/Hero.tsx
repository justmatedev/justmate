import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        JustMate
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                        Desenvolvedor JavaScript
                    </h2>
                    <h3 className="text-xl md:text-2xl text-primary font-medium">
                        React Native e React
                    </h3>

                    <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                        Olá! Sou Mateus Justino, o desenvolvedor por trás do JustMate.
                        Minha paixão é transformar ideias em experiências digitais limpas e funcionais.
                        Minha expertise é focada no ecossistema JavaScript, utilizando ReactJS para
                        construir interfaces web ricas e React Native para criar aplicativos multiplataforma.
                    </p>
                </div>

                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                        <Image src="/icon.svg" alt="JustMate Logo" width={150} height={150} className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import { SiGithub, SiGoogleplay } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'Thinkdo',
            description: 'Um aplicativo mobile de anotações focado em simplicidade e performance. O objetivo é oferecer uma experiência de captura de ideias livre de distrações, garantindo que os dados do usuário estejam sempre seguros, sincronizados com a nuvem e disponíveis até mesmo offline.',
            tags: ['React Native', 'Expo', 'Zustand', 'Firebase', 'NativeWind', 'React Navigation', 'AsyncStorage'],
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=com.justmate.thinkdo',
                github: 'https://github.com/justmatedev/thinkdo',
            },
            type: 'Mobile App',
            bgColor: 'bg-gray-900',
            logo: '/logo/thinkdoapp.svg',
            mockups: [
                '/mockup/thinkdoapp1.png',
                '/mockup/thinkdoapp2.png',
                '/mockup/thinkdoapp3.png'
            ]

        },
        {
            title: 'Thinkdo - Landing Page',
            description: 'Uma landing page moderna, estática e responsiva para o aplicativo Thinkdo. O site serve como a principal vitrine digital do app, apresentando seus recursos de forma clara e objetiva, com o objetivo principal de direcionar os usuários para o download na Google Play Store.',
            tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React-Icons'],
            links: {
                website: 'https://thinkdo.vercel.app/',
                github: 'https://github.com/justmatedev/thinkdo-webpage',
            },
            type: 'Web App',
            bgColor: 'bg-gray-900',
            logo: '/logo/thinkdoweb.svg',
            mockups: [
                '/mockup/thinkdoweb.png',
            ]
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
                    <p className="text-gray-400">
                        Alguns dos trabalhos que desenvolvi recentemente.
                    </p>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>                           
                            <div className="flex-1 w-full">
                                {project.mockups.length == 3 ? (
                                    <div className="grid grid-cols-3 gap-4">
                                        {project.mockups.map((mockup, i) => (
                                            <div key={i} className={`relative rounded-xl overflow-hidden shadow-lg ${i === 1 ? 'scale-110 z-10' : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100 transition-all'}`}>
                                                <div className="aspect-9/19 relative">
                                                    <Image
                                                        src={mockup}
                                                        alt={`${project.title} mockup ${i + 1}`}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className={"rounded-xl overflow-hidden shadow-lg"}>
                                        <div className="aspect-19/9 relative">
                                            <Image
                                                src={project.mockups[0]}
                                                alt={`${project.title} mockup`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                )}
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-xl flex items-center justify-center text-xs font-bold overflow-hidden relative">                                        
                                        <Image
                                            src={project.logo}
                                            alt={`${project.title} logo`}
                                            fill
                                            className="object-contain"
                                        />                                        
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <span className="text-primary font-medium text-sm">{project.type}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-6 pt-4">
                                    {project.links.googlePlay && (
                                        <a href={project.links.googlePlay} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium">
                                            <SiGoogleplay /> Google Play
                                        </a>
                                    )}
                                    {project.links.website && (
                                        <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium">
                                            <FiExternalLink /> Website
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors font-medium">
                                            <SiGithub /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

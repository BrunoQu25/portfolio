interface CertificationProps {
    title: string;
    organization: string;
    year: string;
}

export default function Certification({ title, organization, year }: CertificationProps) {
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-4 rounded-xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                <div className="flex items-start gap-3 relative">
                    <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-white mb-1">{title}</h2>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <span className="text-cyan-400 font-medium">{organization}</span>
                            <span>•</span>
                            <span>{year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
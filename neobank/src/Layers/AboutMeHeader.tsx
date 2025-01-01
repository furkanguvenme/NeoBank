interface AboutMeHeaderProps {
    title: string;
    subtitle: string;
}

export const AboutMeHeader = ({ title, subtitle }: AboutMeHeaderProps) => (
    <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
    </div>
);
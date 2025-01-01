interface SkillCardProps {
    icon: string;
    title: string;
    skills: string[];
}

export const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center mb-4">
            <img src={icon} alt={title} className="w-8 h-8 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="hover:text-blue-600 transition-colors duration-300">
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);
export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-yellow-400 to-violet-500 text-transparent bg-clip-text text-center">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 max-w-md mx-auto">{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4">{description}</p>
        </>
    )
}
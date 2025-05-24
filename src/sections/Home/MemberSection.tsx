// HeroSection.tsx
import React from 'react';
import { MEMBERS } from '../../const/members';
import SelectYourMember from '../../components/Members/SelectYourMember';
import { Image } from '../../components/Image';

const HeroSection: React.FC = () => {

    return (
        <section id='members' className="relative flex min-h-screen w-full">
            {/* Fondo de la sección */}
            <div
                className="mask-fade-bottom animate-fade-in absolute inset-0 w-full bg-[url('/images/banner.png')] bg-cover bg-center duration-75"
            ></div>
            {/* Capa de superposición */}
            <div className="mask-fade-bottom absolute inset-0 w-full bg-black opacity-10"></div>

            {/* Contenido principal */}
            <div className="relative flex w-full flex-col items-center p-8 text-center">
                <div id="landing" className="absolute top-0 flex w-full flex-col items-center py-16">
                    <Image image="/images/sections/squad.png" alt="" className="overflow-hidden rounded-xl object-cover object-center px-6" />
                    <figure className="animate-fade-in relative">
                        <img
                            className="relative z-20 h-fit w-64 sm:w-72 md:w-80 lg:w-96"
                            src="/images/logo.png"
                            fetchPriority="high"
                            alt="False Squad"
                            decoding="async"
                        />
                        <div className="absolute z-0 size-64 bg-pink-400/80 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </figure>
                </div>
                {/* Componente de selección de boxeador */}
                <SelectYourMember members={MEMBERS} />
            </div>
        </section>
    );
};

export default HeroSection;

import React from 'react';
interface IHeroContainerProps {
    children: React.ReactNode
}

const HeroContainer = ({children}: IHeroContainerProps) => {
    return (
        <section className="w-full h-57 bg-hero-bg px-8 pt-12">
            {children}
            <div className="flex flex-col items-center w-full mt-32">
                <h2 className="text-4xl text-center font-bold text-blue-11 w-40R">
                    ¿No sabes qué hacer? En rehably te damos una mano amiga
                </h2>
                <p className="mt-10 text-2xl font-normal w-40R text-center">
                    Localiza el centro de atención a las adicciones <br/>
                    o el especialista indicado según tus necesidades.
                </p>
            </div>
           <div className="flex flex-col items-center mt-24">
               <form className="">
                   <div className="w-77R h-18 bg-white p-4">
                        <div  className=" flex gap-3">
                            <select  className="w-20R border-0 appearance-none border-r-2 border-gray-200  mt-2 font-semibold text-blue-11">
                                <option>Selecciona la Provicia</option>
                                <option>Barcelona</option>
                                <option>Madrid</option>
                            </select>

                            <select className="w-20R border-0 appearance-none border-r-2 border-gray-200 mt-2  font-semibold text-blue-11">
                                <option>Tipo de Adiccion</option>
                                <option>Tabaco</option>
                                <option>Sexo</option>
                            </select>

                            <select  className="w-20R border-0 appearance-none mt-2 font-semibold text-blue-11">
                                <option>Tipo de Ayuda</option>
                                <option>Centros</option>
                                <option>Especialistas</option>
                            </select>
                            <button className="w-80 ml-4 bg-blue-13 text-white h-14">Buscar</button>
                        </div>
                   </div>
               </form>

               <div className="flex flex-col items-center">
                   <p className="mt-14 text-center text-lg">
                       Encuentra la información actualizada sobre la red privada y pública <br/>
                       de atención, asistencia y rehabilitación de las adicciones.
                   </p>
                   <div className="flex justify-center w-80 h-14 mt-10 bg-blue-14 text-white font-bold">
                       <button>NECESITO AYUDA AHORA</button>
                   </div>
                   <p className="mt-6">
                       Te ayudamos a dar el primer paso - Asesoría gratuita y 100% confidencial
                   </p>
               </div>
               </div>
        </section>
    )
}

export default HeroContainer;
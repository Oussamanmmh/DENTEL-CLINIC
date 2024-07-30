import Image from 'next/image';
import photo from '../../../public/assets/orthodontie.jpg';
export default function orthodontiePage(){
    return(
        <>
           <main className='text-center flex flex-col gap-8 p-4 '>
                <div className="text-center flex flex-col md:flex-row items-center gap-8">
                 <div className='flex flex-col gap-6'>
                        <h1 className="text-4xl font-josefin font-bold">
                            Orthodontie Enfants et Adolescents
                            <p className='text-sm text-gray-600'>Des dents droites, bien alignées, et faciles à nettoyer : à nous de jouer !</p>
                            </h1>
                  
                        <p className="text-2xl font-semibold font-josefin">L'orthodontie est une branche de la dentisterie spécialisée dans le diagnostic, la prévention et le traitement des anomalies dentaires et faciales. Elle vise à corriger les malpositions des dents et des mâchoires pour améliorer la fonction et l'apparence du sourire .</p>
                        <p className='text-sm '>Il est recommandé de voir l’orthodontiste pour la première fois autour de 6 ans. La consultation à cet âge permet entre autres de vérifier le nombre de dents, leur position ou de déceler des problèmes de mâchoires qui pourraient nécessiter un traitement précoce. </p>
               </div>
               <Image src={photo} alt="orthodontie" width={500} height={500} className='object-cover rounded-2xl'/>
               </div>
              <div className='flex justify-center'>
                    <iframe
                                className="md:w-1/2 w-full h-80 rounded-lg shadow-lg "
                                src="https://www.youtube.com/embed/ddKqt8s1URw"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                
                    ></iframe>
              </div>
               <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                             <h1 className='text-3xl font-josefin font-semibold'>Pourquoi faire de l’orthodontie chez les enfants ?</h1>
                             <p className='text-lg font-josefin'>L’intérêt de faire de l’orthodontie chez un enfant est double : d’une part pour des raisons esthétiques afin d’embellir le sourire de l’enfant, mais également pour des raisons de santé bucco-dentaire: cette partie “fonctionnelle” de l’orthodontie est souvent oubliée ! En effet, il est fréquent chez les enfants de détecter un éventuel problème dentaire : un mauvais alignement, un espacement trop important entre chaque dent ou encore un manque de place pour que toutes les dents puissent se développer correctement dans la bouche de l’enfant. En corrigeant ces problèmes dès le plus jeune âge, on assure au patient de limiter les risques d’aggravation à l’âge adulte.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                             <h1 className='text-3xl font-josefin font-semibold'>Quand aller voir un orthodontiste pour son enfant ?</h1>
                             <p className='text-lg font-josefin'>Il est recommandé de prendre rendez-vous avec un orthodontiste assez tôt : dès 6 ans. La consultation à cet âge permet de déceler des problèmes de mâchoires pouvant nécessiter un traitement orthodontique précoce. Entre 6 et 10 ans, l’orthodontiste peut préconiser une première phase de traitement pour favoriser la bonne évolution de la dentition. Mais généralement, c’est entre 11 et 16 ans qu’il est plus simple de traiter la majorité des cas allant de la correction de l’alignement des dents à une malocclusion plus complexe.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                             <h1 className='text-3xl font-josefin font-semibold'>Quels sont les traitements orthodontiques pour les enfants ? </h1>
                             <p className='text-lg font-josefin text-start'>
                             Il existe principalement 4 types de traitements orthodontiques à destination des enfants et adolescents :
                             </p>
                             <ul className='ml-6'>
                                    <li className='list-disc'>
                                    Les appareils amovibles de type faux-palais, propulseurs ou disjoncteurs. Ces appareils n’alignent pas les dents mais permettent de corriger les problèmes des mâchoires dès le plus jeune âge ( palais étroit, mâchoire du haut trop en avant ou en arrière par rapport à la mâchoire du bas, etc…) afin d’éviter un traitement orthodontique trop long à l’adolescence.
                                    </li>
                                    <li className='list-disc'>
                                    Les bagues « classiques » : il s’agit d’un concept multi-attaches qui consiste à poser des attaches ( bagues) sur la face externe de chaque dent et à les relier entre elles par un fil. Elles peuvent être métalliques, ou en céramique pour un rendu visuel plus discret ;
                                    </li>
                                    <li className='list-disc'>
                                    La technique linguale : c’est aussi un appareillage multi-attaches mais celui-ci consiste à poser les attaches sur la face interne des dents de façon à ce que ces dernières ne se voient pas ;
                                    </li>
                                    <li className='list-disc'>
                                    Les aligneurs Invisalign : Les plus populaires chez les adultes. Ce sont des gouttières transparentes amovibles qui permettent de corriger l’alignement des dents au fur et à mesure du traitement à l’aide d’un appareil quasi-invisible et qui peut être retiré (au moment du repas par exemple).
                                    </li>
                             </ul>

                           
                        </div>

               </div>
           </main>
        </>
    )
}
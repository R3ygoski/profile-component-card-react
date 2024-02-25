import Infos from "./Infos"
import CardPattern from "./assets/bg-pattern-card.svg"
import ProfileAvatar from "./assets/image-victor.jpg"

const infos = [
    {
        id: 1,
        value: '80K',
        type: 'Followers'
    },
    {
        id: 2,
        value: '803K',
        type: 'Likes'
    },
    {
        id: 3,
        value: '1.4K',
        type: 'Photos'
    },
]

export default function Card () {
    return (
        <main className="rounded-xl bg-white relative">
            <img src={CardPattern} className="rounded-t-xl"/>
            <img src={ProfileAvatar} className="rounded-full border-4 border-white absolute top-1/4 left-1/3"/>
            <article className="text-center mt-16">
                <div className="flex justify-center gap-2">
                    <h2 className="text-very-dark-desaturated-blue font-bold">Victor Crest</h2>
                    <p className="text-dark-grayish-blue">26</p>
                </div>
                <p className="text-dark-grayish-blue mt-1 text-sm">London</p>
                <hr className="my-6"/>
                <section className="flex justify-evenly text-center mb-6">
                    {infos.map((e)=>{
                        return <Infos key={e.id} {...e}/>
                    })}
                </section>
            </article>
        </main>
    )
}
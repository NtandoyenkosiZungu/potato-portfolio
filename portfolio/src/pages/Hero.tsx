import Button from "../components/Button"

export default function Hero () {
    return (
        <section className="p-5 h-screen w-screen bg-onyx">
            <div className="w-1/3 text-primary font-rubik font-heading">
                <div>
                    <h4 className="">I am Ntandoyenkosi Zungu</h4>
                    <h2 className="font-">Full-Stack Software Developer</h2>
                    <p>Building solid systems that are well architected on the backend and easy to use on the frontend</p>
                </div>
                <div>
                    <Button label={"Download CV"} onClick={()=>{}}/>
                </div>
            </div>
        </section>
    )
}
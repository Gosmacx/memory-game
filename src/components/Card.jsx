import Picture from '../assets/front.webp'

function App({ setCard, id, secretId, text }) {

    const chooseCard = () => {
        setCard(document.getElementById(id), secretId)
    }

    return (
        <div onClick={chooseCard} className="flip-card md:w-[300px] md:h-[300px] w-24 h-24 cursor-pointer">
            <div id={id} className="flip-card-inner">
                <div className="flip-card-front flex items-center justify-center rounded">
                    <img src={Picture} className="rounded-xl" alt="" />
                </div>
                <div className="flip-card-back flex items-center justify-center">
                    <img src={text} width='100' alt="" />
                </div>
            </div>
        </div>
    )
}

export default App
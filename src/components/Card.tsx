const cardText = {
    title: "Order Summary",
    text: "You can now listen to millons of songs, audiobooks, and podcasts on any device anywhere you like!"
}

const Card = () => {
    return (
        <div className="w-[340px] bg-white rounded-2xl shadow-2xl">

            <img src="images/illustration-hero.svg" className="rounded-t-2xl" />

            <div className="flex flex-col p-6 gap-6">

                <div className="flex flex-col gap-4 items-center text-center p-3">
                    <h2 className="text-2xl text-c-darkBlue font-[900] ">
                        {cardText.title}
                    </h2>
                    <p className="text-c-desaturatedBlue">
                        {cardText.text}
                    </p>
                </div>

                <div className="flex p-4 items-center gap-5 bg-c-veryPaleBlue rounded-xl text-sm">

                    <img src="images/icon-music.svg" />

                    <div className="flex flex-col flex-grow ">

                        <span className="font-[900] text-c-darkBlue">
                            Annual Plan
                        </span>
                        <span className="text-c-desaturatedBlue font-medium">
                            $59.99/year
                        </span>

                    </div>

                    <a href="#" className="underline font-[900] text-c-brightBlue hover:opacity-60 hover:no-underline">Change</a>

                </div>

                <div className="flex flex-col gap-4">

                    <button className="bg-c-brightBlue text-white py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-opacity-60">
                        Proceed to Payment
                    </button>

                    <button className="text-c-desaturatedBlue text-sm font-[900] hover:text-c-darkBlue">
                        Cancel Order
                    </button>

                </div>


            </div>

        </div>
    )
}
export default Card
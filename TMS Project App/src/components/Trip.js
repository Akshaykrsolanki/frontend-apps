import "./TripStyles.css";
import TripData from "./TripData"

function Trip (){
    return(
        <div className="trip">
            <h1>Places to visit for Life.</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={"https://images.unsplash.com/photo-1569996980833-901b5cd2eb70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
                heading = "Trip to Coorg" 
                text = "Coorg is known for its dense forest cover and the exotic flora and fauna found here. It has three wildlife sanctuaries; Pushpagiri Wildlife Sanctuary, Talakaveri Wildlife Sanctuary and Brahmagiri Wildlife Sanctuary, one National Park; the Nagarahole National Park and the only private sanctuary of India; the SAI Sanctuary. Coorg is home for species endemic to the Western Ghats. It has large Tiger and Elephant population as well. As per the elephant census of 2023, Coorg with 1,013 elephants, had nearly one-sixth of total elephant population in Karnataka, second only to Chamarajanagar."
                price = "₹3999"
                />

                <TripData
                image={"https://images.unsplash.com/photo-1597754865557-96ea6b53c9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
                heading = "Trip to Manali"
                text = "Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River. Apart from vacations and workations, Manali is a must-visit for trekkers, as it's an excellent base for exploring this side of the Himalayas. River Beas provides great rafting options in the nearby town of Kullu. Adjoining the Parvati river lies the Parvati Valley, with  Kasol, Manikaran, Tosh, and small villages attracting travelers for extended stays. Atal Tunnel allows travelers to reach Sissu within a few hours, making Spiti more accessible."
                price = "₹4999"
                />

                <TripData
                image={"https://images.unsplash.com/photo-1562649846-ab413ca01712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"}
                heading = "Trip to Shimla"
                text = "Shimla has several places to visit. Local hangouts like the Mall and the Ridge area in the heart of the city. Shimla has many temples and is often visited by devotees from nearby towns and cities.The Kali Bari temple, dedicated to the Hindu goddess Kali is near the mall. Jakhoo Temple, for the Hindu god Hanuman, is located at the highest point in Shimla. Sankat Mochan, another Hanuman temple, is famous for the numerous monkeys that are always found in its vicinity. Shimla arts and crafts are highly in demand by tourists. They range from excellent pieces of jewellery, embroidered shawls and garments."
                price = "₹5999"
                />

                <TripData
                image={"https://images.unsplash.com/photo-1609115451953-fb40593c0c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"}
                heading = "Trip to Kashmir"
                text = "Kashmir, often referred to as Paradise on Earth, is a region of immense natural beauty and cultural diversity located in the northern part of India. Kashmir has been a favorite destination for tourists worldwide, attracting visitors with its breathtaking landscapes, serene lakes, snow-capped mountains, and warm hospitality. Kashmir boasts a plethora of natural wonders, including the Dal Lake, Nigeen Lake, Gulmarg, Pahalgam, and the Amarnath Cave. Each of these destinations offers a distinct charm and allows tourists to indulge in activities such as shikara rides, trekking, and skiing."
                price = "₹6999"
                />
            
                <TripData
                image={"https://images.unsplash.com/photo-1588508149880-3ee043ff1648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"}
                heading = "Trip to Mussoorie"
                text = "Mussoorie, affectionately known as the Queen of Hill Stations, is a picturesque town located in the Indian state of Uttarakhand. Mussoorie has long been a magnet for tourists seeking respite from the scorching heat of the plains and an escape into the lap of the Himalayas. Nestled in the Garhwal Himalayan ranges, Mussoorie boasts panoramic views of the majestic Shivalik range and the Doon Valley. Its altitude, pleasant climate, and lush landscapes make it an ideal destination for nature enthusiasts. Mussoorie is blessed with natural wonders, including Kempty Falls, Camel's Back Road, and Gun Hill."
                price = "₹7999"
                />
            
                <TripData
                image={"https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"}
                heading = "Trip to Rishikesh"
                text = "Rishikesh, situated in the northern state of Uttarakhand, India, is renowned as the Yoga Capital of the World and an adventure seeker's paradise. Rishikesh has attracted travelers for decades, not only as a spiritual hub but also as an adventure destination. Rishikesh's appeal as a tourist destination is multifaceted, encompassing spirituality, adventure, and natural beauty. Rishikesh is nestled in the foothills of the Himalayas, along the banks of the sacred Ganges River. The town's serene environment, nestled within lush forests and pristine riverbanks, creates a tranquil setting."
                price = "₹8999"
                />
            
            </div>
        </div>
    );
}

export default Trip;

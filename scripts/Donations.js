import { getPacDonations, getPacs } from "../api/dataAccess.js"



export const PacDonations = () => {
    const pacDonations = getPacDonations()
    const pacs = getPacs()
   
    let html = ``
       
    pacDonations.map(pacDonation => {
            pacs.map(pac => {
            if (pac.id === pacDonation.pacId){
                html += 
                `<section class="pac">
                <header class="pac__name">
                    <h1>${pac.registeredName}</h1>
                </header>   
                <div class="pac__info">
                    <div>${pac.address}</div>
                </div>
                
                </section>`
            }    
            })}
)
    return html
}



            // <div class="pac__donors">
            //     <h2>Donors</h2>
            //     <ul>
            //         <li>XLEEN ($2,103)</li>
            //         <li>TALAE ($50,192)</li>
            //     </ul>
            // </div>
        
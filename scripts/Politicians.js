import { getPoliticians } from "../api/dataAccess.js"



export const Politicians = () => {
    const politicians = getPoliticians()
    let html = ""
    
    politicians.map(politician => {
    html += `<li> 
    ${politician.name.first} ${politician.name.last} 
    </li>`
    console.log(html)
   }
    )

    return html
}
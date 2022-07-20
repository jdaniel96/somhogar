import { SectionHeader } from "../components/sectionHeader/_SectionHeader"
import { PropertyCard } from "../components/Cards/_cards"


export const PropertiesView = function() {
    
    return(
        <>
        <SectionHeader title="PROPIEDADES"/>
        <PropertyCard url={process.env.REACT_APP_URL_ALL_PROPERTIES_URL}/>
        </>
    )
}
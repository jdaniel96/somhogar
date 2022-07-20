import { SectionHeader } from "../components/sectionHeader/_SectionHeader"
import { PropertyCard } from "../components/Cards/_cards"

export const RentView = function() {
    return (
        <>
        <SectionHeader title="PROPIEDADES EN ALQUILER"/>
        <PropertyCard url={process.env.REACT_APP_URL_RENT_PROPERTIES_URL}/>
        </>
    )
}
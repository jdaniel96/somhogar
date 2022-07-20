import { SectionHeader } from "../components/sectionHeader/_SectionHeader"
import { PropertyCard } from "../components/Cards/_cards"

export const SellView = function() {
    return(
        <>
        <SectionHeader title="PROPIEDADES EN VENTA"/>
        <PropertyCard url={process.env.REACT_APP_URL_SELL_PROPERTIES_URL}/>
        </>
    )
}
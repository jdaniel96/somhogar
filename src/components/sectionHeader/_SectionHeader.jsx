import HeaderStyles from './SectionHeader.module.css'

export const SectionHeader = (props) => {

    return(
        <div className={HeaderStyles.SectionHeader}>
            <h1 style={{color: 'whitesmoke', textAlign: 'center', height:'5em', paddingTop:'2em'}}>{props.title}</h1>
        </div>

    )
}